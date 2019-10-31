const db = require("../models");
const bcrypt = require("bcrypt")

exports.register = function (req, res) {
  let salt = bcrypt.genSaltSync(10);
  db.User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
  })
    .then(function () {
      return res.redirect("/login");
    })
    .catch(function (err) {
      res.send(err);
    });
  console.log(req.body)
  // Need to fix this by either using callback or promise. Redirect need to execute only and only after user.register has finished executing.
}; 