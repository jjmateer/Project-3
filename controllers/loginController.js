const db = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const auth = require("../middleware/auth");

exports.register = function (req, res) {
  console.log(req.body)
  //Check if there is a user in the database with same email.
  db.User.findOne({ email: req.body.email })
  .then(user => {
    console.log(user)
      //If there isn't, create a new user with hashed password.
      if (!user) {
        let salt = bcrypt.genSaltSync(10);
        db.User.create({
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt),
        }).then(user => {
          //Create JSON web token which is signed with the new user's info and expires in 1 hour.
          jwt.sign({
            id: user.id
          }, 'secretkey', { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                email: user.email
              }
            });
            console.log("User added to database.")
            console.log(`User info: ${user}`)
            console.log(`User token: ${token}`)
          })
        })
      }
      if(user) {
        console.log("User already exists")
        return res.status(400).json({ msg: "User already exists." })
      }
    })
    .catch(function (err) {
      console.log(err)
    });
};

exports.login = function (req, res) {
  console.log(req.body)
  db.User.findOne({ email: req.body.email })
    .then(user => {
      console.log(user)
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        console.log("Login success.")
        // console.log(user.id)
        jwt.sign({
          id: user.id
        }, 'secretkey', { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user
          });
          console.log(`User info: ${user}`)
          console.log(`User token: ${token}`)
        })
      } else {
        return res.status(400).json({ msg: "Invalid Credentials or non existent user"})
      }
    })
    .catch(function (err) {
      console.log(err)
    });
};

exports.user = function (req, res) {
  router.get("/user", auth, () => {
    User.findById(req.user.id)
      .select("-password")
      .then(user => res.json(user));
  })
};