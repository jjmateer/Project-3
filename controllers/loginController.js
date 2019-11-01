const db = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

exports.register = function (req, res) {
  //Check if there is a user in the database with same email.
  db.User.findOne({ email: req.body.email })
    .then(user => {
      //If there isn't, create a new user with hashed password.
      if (!user) {
        let salt = bcrypt.genSaltSync(10);
        db.User.create({
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt),
        }).then(user => {
          //Create JSON web token which is signed with the new user's info and expires in 1 hour.
          jwt.sign({ user }, 'secretkey', { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user
            });
            console.log("User added to database.")
            console.log(`User info: ${user}`)
            console.log(`User token: ${token}`)
          })
        })
      } else {
        console.log("User already exists and will not be added to database.")
      }
    })
    .catch(function (err) {
      console.log(err)
    });
};

exports.login = function (req, res) {
  // console.log(req.body)
  db.User.findOne({ email: req.body.email })
    .then(user => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        console.log("Login success.")
        jwt.sign({ user }, 'secretkey', { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user
          });
          console.log(`User info: ${user}`)
          console.log(`User token: ${token}`)
        })
      } else {
        console.log("Login failed.")
      }
    })
    .catch(function (err) {
      console.log(err)
    });
};