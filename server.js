var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 3001;
require('dotenv').config();
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});

app.listen(PORT, function () {
  console.log('🌎 ==> API server now on port' + PORT);
});
