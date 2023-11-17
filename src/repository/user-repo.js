const prisma = require("../db/db");

const findUsers = async () => {
    const Users = await prisma.user.findMany();
    
    return Users;
    };

const findUserById = async (id) => {
    const User = await prisma.user.findUnique({
        where: {
            id_user: parseInt(id),
        },
    });

    return User;
};

const insertUser = async (UserData) => {
    const User = await prisma.user.create({
        data: {
            username: UserData.username,
            password: UserData.password,
        }
    });

    return User;
};

const deleteUser = async (id) => {
    await prisma.user.delete({
        where: {
            id_user: parseInt(id),
        },
    });
};

const editUser = async (id, UserData) => {
    const User = await prisma.user.update({
        where: {
            id_user: parseInt(id),
        },
        data: {
            username: UserData.username,
            password: UserData.password,
        }
    });

    return User;
};

module.exports = {
    findUsers,
    findUserById,
    insertUser,
    deleteUser,
    editUser,
};




