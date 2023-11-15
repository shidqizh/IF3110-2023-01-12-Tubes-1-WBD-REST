const express = require("express");
const app = express()

app.use(express.json())

const PORT = 8000

app.get("/api", (req, res) => {
    res.send("SABI")
})


const playlistController = require("./src/controller/playlist-controller.js")

app.use("/playlists", playlistController);

app.listen(PORT, () => {
    console.log("REST API started at: " + PORT)

})