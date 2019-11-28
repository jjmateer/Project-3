const db = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

exports.register = function (req, res) {
  const { name, email, password, password2 } = req.body;
  console.log(req.body)
  console.log(`${password}   ${password2}`)
  if (!name || !email || !password || !password2) {
    return res.status(400).json({ msg: "Please fill out all fields." })
  } else if (password !== password2) {
    return res.status(400).json({ msg: "Passwords do not match." })
  } else if (password.length < 6) {
    return res.status(400).json({ msg: "Password must be six characters or longer." })
  }
  db.User.findOne({ email })
    .then(user => {
      if (!user) {
        db.User.findOne({ email })
          .then(user => {
            if (!user) {
              let salt = bcrypt.genSaltSync(10);
              db.User.create({
                name: name,
                email: email,
                password: bcrypt.hashSync(password, salt),
              }).then(user => {
                db.Cart.create({
                  user: user.id
                })
                jwt.sign({
                  id: user.id
                }, "secretkey", { expiresIn: 3600 }, (err, token) => {
                  if (err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });
                  console.log(`${user.name} added to database.`)
                })
              })
            }
          })

      } else if (user) {
        return res.status(400).json({ msg: "User already exists." })
      }

    }).catch(function (err) { res.status(422).json({ msg: err }) });
}

exports.login = function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please fill out all fields." })
  } else {
    db.User.findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(400).json({ msg: "Non-existent user." })
        }
        if (email === user.email && user && bcrypt.compareSync(password, user.password)) {
          jwt.sign({
            id: user.id
          }, "secretkey", { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            });
          })
        } else {
          return res.status(400).json({ msg: "Invalid password." })
        }
      }).catch(function (err) { res.status(422).json({ msg: err }) });
  }
};


// router.get('/user', auth, (req, res) => {
exports.checkUser = function (req, res) {
  if (req.body.token) {
    db.User.findById(req.body.id)
      .select('-password')
      .then(user => res.json(user));
  } else {
    res.status(400).json(null)
  }
};