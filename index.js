const express = require("express");
const app = express()


app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Bisa juga disesuaikan dengan domain yang diizinkan
    next();
  });

const PORT = 8000

app.get("/api", (req, res) => {
    res.send("SABI")
})

const playlistController = require("./src/controller/playlist-controller.js")
const userController = require("./src/controller/user-controller.js")
const songController = require("./src/controller/song-controller.js")

app.use("/playlists", playlistController);
app.use("/users", userController);
app.use("/songs", songController);

app.listen(PORT, () => {
    console.log("REST API started at: " + PORT)

})