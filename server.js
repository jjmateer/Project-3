require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

<<<<<<< HEAD
mongoose.connect("mongodb://localhost/storefrontdb", {
  useNewUrlParser: true,
  useCreateIndex: true
});

=======
mongoose.connect('mongodb://localhost/storefrontdb',
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
>>>>>>> 457a207de815ae1448d164369b5d69d5d03a3de3
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("Connected to MongoDB.");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
