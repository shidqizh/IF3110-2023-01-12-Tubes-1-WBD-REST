//untuk handle req res dan validasi
const express = require("express");

const {
  getAllPlaylists,
  getPlaylistById,
  createPlaylist,
  deletePlaylistById,
  editPlaylistById,
} = require("../service/playlist-service");

const router = express.Router();

router.get("/", async (req, res) => {
  const Playlists = await getAllPlaylists();

  res.send(Playlists);
});

router.get("/:id", async (req, res) => {
  try {
    const PlaylistId = parseInt(req.params.id);
    const Playlist = await getPlaylistById(parseInt(PlaylistId));

    res.send(Playlist);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPlaylistData = req.body;

    const Playlist = await createPlaylist(newPlaylistData);

    res.send({
      data: Playlist,
      message: "create Playlist success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const PlaylistId = req.params.id; // string

    await deletePlaylistById(parseInt(PlaylistId));

    res.send("Playlist deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const PlaylistId = req.params.id;
  const PlaylistData = req.body;

  if (
    !(
      PlaylistData.image &&
      PlaylistData.description &&
      PlaylistData.name &&
      PlaylistData.price
    )
  ) {
    return res.status(400).send("Some fields are missing");
  }

  const Playlist = await editPlaylistById(parseInt(PlaylistId), PlaylistData);

  res.send({
    data: Playlist,
    message: "edit Playlist success",
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const PlaylistId = req.params.id;
    const PlaylistData = req.body;

    const Playlist = await editPlaylistById(parseInt(PlaylistId), PlaylistData);

    res.send({
      data: Playlist,
      message: "edit Playlist success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;