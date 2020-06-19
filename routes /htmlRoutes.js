// Global Variables
const path = require("path");   

module.exports = function (app) {

    // return to index.html file
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // return to notes.html file
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // If no matching route is found default to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}
