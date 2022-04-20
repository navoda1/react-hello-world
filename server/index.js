const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const PATH_DIST = path.resolve(__dirname, "..", "client", "dist");
const PATH_INDEX_HTML = path.resolve(PATH_DIST, "index.html");

app.use(express.json())
app.use(express.static(PATH_INDEX_HTML));
app.use(express.static(PATH_DIST));
app.use(express.static("../client/static/AvatarMaker.png"));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/", (req, res) => {
    res.sendFile(PATH_INDEX_HTML)
});
  

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});