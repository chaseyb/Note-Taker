// Require the Express
const express = require("express");

// Create an express server.
const app = express();

// Set port.
const PORT = process.env.PORT || 3000;

//EXPRESS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

require("./routes/APIroutes")(app);
require("./routes/HTMLroutes")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});