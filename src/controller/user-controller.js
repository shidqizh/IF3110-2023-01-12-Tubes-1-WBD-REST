//untuk handle req res dan validasi
const express = require("express");

const {
  getAllUsers,
  getUsersById,
  createUsers,
  deleteUsersById,
  editUsersById,
} = require("../service/user-service");

const router = express.Router();

router.get("/", async (req, res) => {
    const Users = await getAllUsers();
    
    res.send(Users);
    });

router.get("/:id", async (req, res) => {
    try {
        const UsersId = parseInt(req.params.id);
        const Users = await getUsersById(parseInt(UsersId));
        
        res.send(Users);
        } catch (err) {
            res.status(400).send(err.message);
        }
    });

router.post("/", async (req, res) => {
    try {
        const newUsersData = req.body;
        
        const Users = await createUsers(newUsersData);
        
        res.send({
            data: Users,
            message: "create Users success",
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const UsersId = req.params.id; // string
        
        await deleteUsersById(parseInt(UsersId));
        
        res.send("Users deleted");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    const UserId = req.params.id;
    const UserData = req.body;
  
    if (
      !(
        UserData.image &&
        UserData.description &&
        UserData.name &&
        UserData.price
      )
    ) {
      return res.status(400).send("Some fields are missing");
    }
  
    const User = await editUserById(parseInt(UserId), UserData);
  
    res.send({
      data: User,
      message: "edit User success",
    });
});
router.patch("/:id", async (req, res) => {
    try {
      const UserId = req.params.id;
      const UserData = req.body;
  
      const User = await editUserById(parseInt(UserId), UserData);
  
      res.send({
        data: User,
        message: "edit User success",
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

module.exports = router;
