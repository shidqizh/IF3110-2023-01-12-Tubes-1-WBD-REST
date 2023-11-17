const {
    findUsers,
    findUserById,
    insertUser,
    deleteUser,
    editUser,
} = require("../repository/user-repo");

const getAllUsers = async () => {
    const Users = await findUsers();

    return Users;
}

const getUserById = async (id) => {
    const User = await findUserById(id);

    if (!User) {
        throw Error("User not found");
    }

    return User;
}

const createUser = async (newUserData) => {
    const User = await insertUser(newUserData);

    return User;
}

const deleteUserById = async (id) => {
    await getUserById(id);

    await deleteUser(id);
}

const editUserById = async (id, UserData) => {
    await getUserById(id);

    const User = await editUser(id, UserData)

    return User;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserById,
    editUserById,
};

