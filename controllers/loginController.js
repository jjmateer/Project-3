const db = require("../models");
const bcrypt = require("bcrypt")

exports.register = function (req, res) {
  let salt = bcrypt.genSaltSync(10);
  db.User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
  })
    .catch(function (err) {
      console.log(err)
    });
  console.log(req.body)
};

exports.login = function (req, res) {
  db.User.find({ email: req.body.email })
    .then(function (user) {
      console.log(user)
      if (user && bcrypt.compareSync(req.body.password, user[0].password)) {
        req.session.user = { username: user.email };
        req.session.save(function () {
          console.log("Login success.")
          // console.log(req.body)
        });
      } else {
        console.log("Login failed.")
        // console.log(req.body)
      }
    })
    .catch(function (err) {
      console.log(err)
    });
};