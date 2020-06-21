// DEPENDENCIES
const path = require("path");
const router = require("express").Router();

// Path for notes 
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// Default to index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;