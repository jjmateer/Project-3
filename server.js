const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const PORT = process.env.PORT || 3001;
require("dotenv").config();
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// mongoose.connect("mongodb://localhost/storefrontdb", { useNewUrlParser: true });

// var dbUrl = "mongodb://localhost/storefrontdb";
// mongoose.connect((dbUrl, err) => {
//   console.log("Connected to mongoose");
//   if (err) {
//     console.log(err)
//   }
// });

mongoose.connect('mongodb://localhost/storefrontdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Connected to mongoose");
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
