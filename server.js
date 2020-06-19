// Require the Express
const express = require("express");

// Create an express server.
const app = express();

// Port Set 
const PORT = process.env.PORT || 3000;

// Express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Page routes 
require("./routes/APIroutes")(app);
require("./routes/HTMLroutes")(app);

// Server Listener 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});