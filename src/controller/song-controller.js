const express = require("express");

const {
    getAllSongs,
    getSongsById,
    createSongs,
    deleteSongsById,
    editSongsById,
    } = require("../service/song-service");

const router = express.Router();

router.get("/", async (req, res) => {
    const Songs = await getAllSongs();
    
    res.send(Songs);
    });

router.get("/:id", async (req, res) => {
    try {
        const SongsId = parseInt(req.params.id);
        const Songs = await getSongsById(parseInt(SongsId));
        
        res.send(Songs);
        } catch (err) {
            res.status(400).send(err.message);
        }
    });

router.post("/", async (req, res) => {
    try {
        const newSongsData = req.body;
        
        const Songs = await createSongs(newSongsData);
        
        res.send({
            data: Songs,
            message: "create Songs success",
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const SongsId = req.params.id; // string
        
        await deleteSongsById(parseInt(SongsId));
        
        res.send("Songs deleted");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    const SongId = req.params.id;
    const SongData = req.body;
  
    if (
      !(
        SongData.image &&
        SongData.description &&
        SongData.name &&
        SongData.price
      )
    ) {
      return res.status(400).send("Some fields are missing");
    }
  
    const Song = await editSongById(parseInt(SongId), SongData);
  
    res.send({
      data: Song,
      message: "edit Song success",
    });
  });

  router.patch("/:id", async (req, res) => {
    try {
      const SongId = req.params.id;
      const SongData = req.body;
  
      const Song = await editSongById(parseInt(SongId), SongData);
  
      res.send({
        data: Song,
        message: "edit Song success",
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });


module.exports = router;
