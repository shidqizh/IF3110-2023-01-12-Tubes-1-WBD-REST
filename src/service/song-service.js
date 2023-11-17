const {
    findSongs,
    findSongById,
    insertSong,
    deleteSong,
    editSong,
} = require("../repository/song-repo");

const getAllSongs = async () => {
    const Songs = await findSongs();

    return Songs;
}

const getSongById = async (id) => {
    const Song = await findSongById(id);

    if (!Song) {
        throw Error("Song not found");
    }

    return Song;
}

const createSong = async (newSongData) => {
    const Song = await insertSong(newSongData);

    return Song;
}

const deleteSongById = async (id) => {
    await getSongById(id);

    await deleteSong(id);
}

const editSongById = async (id, SongData) => {
    await getSongById(id);

    const Song = await editSong(id, SongData)

    return Song;
}

module.exports = {
    getAllSongs,
    getSongById,
    createSong,
    deleteSongById,
    editSongById,
};