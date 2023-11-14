//untuk logika
const {
    findPlaylists,
    findPlaylistById,
    insertPlaylist,
    deletePlaylist,
    editPlaylist,
  } = require("../repository/playlist-repo");

const getAllPlaylists = async () => {
  const Playlists = await findPlaylists();

  return Playlists;
};

const getPlaylistById = async (id) => {
  const Playlist = await findPlaylistById(id);

  if (!Playlist) {
    throw Error("Playlist not found");
  }

  return Playlist;
};

const createPlaylist = async (newPlaylistData) => {
  const Playlist = await insertPlaylist(newPlaylistData);

  return Playlist;
};

const deletePlaylistById = async (id) => {
  await getPlaylistById(id);

  await deletePlaylist(id);
};

const editPlaylistById = async (id, PlaylistData) => {
  await getPlaylistById(id);

  const Playlist = await editPlaylist(id, PlaylistData)

  return Playlist;
};

module.exports = {
  getAllPlaylists,
  getPlaylistById,
  createPlaylist,
  deletePlaylistById,
  editPlaylistById,
};