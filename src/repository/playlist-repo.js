//untuk komunikasi dengan database

const prisma = require("../db/db");

const findPlaylists = async () => {
    const Playlists = await prisma.playlist.findMany();
  
    return Playlists;
  };
  
  const findPlaylistById = async (id) => {
    const Playlist = await prisma.playlist.findUnique({
      where: {
        id,
      },
    });
  
    return Playlist;
  };
  
  const insertPlaylist = async (PlaylistData) => {
    const Playlist = await prisma.playlist.create({
      data: {
        name: PlaylistData.name,
        description: PlaylistData.description,
        image: PlaylistData.image,
        price: PlaylistData.price,
      },
    });
  
    return Playlist;
  };
  
  const deletePlaylist = async (id) => {
    await prisma.playlist.delete({
      where: {
        id,
      },
    });
  };
  
  const editPlaylist = async (id, PlaylistData) => {
    const Playlist = await prisma.playlist.update({
      where: {
        id: parseInt(id),
      },
      data: {
        description: PlaylistData.description,
        image: PlaylistData.image,
        name: PlaylistData.name,
        price: PlaylistData.price,
      },
    });
  
    return Playlist;
  };
  
  module.exports = {
    findPlaylists,
    findPlaylistById,
    insertPlaylist,
    deletePlaylist,
    editPlaylist,
  };