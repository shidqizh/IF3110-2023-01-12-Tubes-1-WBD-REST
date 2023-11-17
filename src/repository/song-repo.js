const prisma = require("../db/db");

const findSongs = async () => {
    const Songs = await prisma.song.findMany();

    return Songs;
};

const findSongById = async (id) => {
    const Song = await prisma.song.findUnique({
        where: {
            id_song: parseInt(id),
        },
    });

    return Song;
};

const insertSong = async (SongData) => {
    const Song = await prisma.song.create({
        data: {
            title: SongData.title,
            artist : SongData.artist,
        }
    });

    return Song;
};

const deleteSong = async (id) => {
    await prisma.song.delete({
        where: {
            id_song: parseInt(id),
        },
    });
};

const editSong = async (id, SongData) => {
    const Song = await prisma.song.update({
        where: {
            id_song: parseInt(id),
        },
        data: {
            title: SongData.title,
            artist : SongData.artist,
        }
    });

    return Song;
};

module.exports = {
    findSongs,
    findSongById,
    insertSong,
    deleteSong,
    editSong,
};