const db = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

exports.register = function (req, res) {
  db.User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        let salt = bcrypt.genSaltSync(10);
        db.User.create({
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt),
        }).then(user => {
          jwt.sign({ user }, 'secretkey', { expiresIn: 3600 }, (err, token) => {
            if(err) throw err;
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
  console.log(req.body)
  const user = {
    id: req.body._id,
    username: req.body.username,
    email: req.body.email
  }
  // console.log(req.body)
  jwt.sign({ user }, 'secretkey', { expiresIn: "1h" }, (err, token) => {
    res.json({
      token
    });
  });

};
















  // db.User.find({ email: req.body.email })
  //   .then(function (user) {
  //     console.log(user)
  //     if (user && bcrypt.compareSync(req.body.password, user[0].password)) {
  //       req.session.user = { username: user.email };
  //       req.session.save(function () {
  //         console.log("Login success.")
  //         req.session.user = { id: user._id, username: user.email };
  //         req.session.save(function() {
  //           res.redirect("/");
  //         });
  //       });
  //     } else {
  //       console.log("Login failed.")
  //       // console.log(req.body)
  //     }
  //   })
  //   .catch(function (err) {
  //     console.log(err)
  //   });