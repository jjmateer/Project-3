const db = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
// const auth = require("../middleware/auth");

exports.register = function (req, res) {
  console.log(req.body)
  const { email, password } = req.body;
  //Check if there is a user in the database with same email.
  if (!email || !password) {
    return res.status(400).json({ msg: "Please fill out all fields." })
  } else {
    db.User.findOne({ email })
      .then(user => {
        //If there isn't, create a new user with hashed password.
        if (!user) {
          let salt = bcrypt.genSaltSync(10);
          db.User.create({
            email: email,
            password: bcrypt.hashSync(password, salt),
          }).then(user => {
            db.Cart.create({
              user: user.id
            })
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
              console.log(`Cart created with user id: ${user.id}`)
            })
          })
        }
        if (user) {
          console.log("User already exists")
          return res.status(400).json({ msg: "User already exists." })
        }
      })
      .catch(function (err) {
        console.log(err)
      });
  }
};

exports.login = function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please fill out all fields." })
  } else {
    db.User.findOne({ email })
      .then(user => {
        if (email === user.email && user && bcrypt.compareSync(password, user.password)) {
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
            console.log("Login success.")
            console.log(`User info: ${user}`)
            console.log(`User token: ${token}`)
          })
        } else {
          console.log("Invalid credentials")
          return res.status(400).json({ msg: "Invalid Credentials" })
        }
      })
      .catch(function (err) {
        console.log(err)
      });
  }
};


// router.get('/user', auth, (req, res) => {
exports.checkUser = function (req, res) {
  console.log(req.body.user)
  db.User.findById(req.body.user.id)
    .select('-password')
    .then(user => res.json(user));
}