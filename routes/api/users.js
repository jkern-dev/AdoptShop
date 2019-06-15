const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const validateRegistration = require("../../validation/register");
const validateLogin = require("../../validation/login");

// require user model
const User = require("../../models/User");

router.get("/test", (req, res) => {
  res.json({msg: "this is the user route"});
});

// create a new user
router.post("/register", (req,res) => {
  const { errors, isValid } = validateRegistration(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({email: req.body.email})
    .then(user => {
      if (user) {
        return res.status(400).json({email: "Email already registered to a user"})
      } else {
        const newUser = new User({
          email: req.body.email,
          userType: req.body.userType,
          password: req.body.password,
          city: req.body.city,
          state: req.body.state
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
          })
        })
      }
    })
});

// create a user session
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { errors, isValid } = validateLogin(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  };ß

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: "This user does not exist"});
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              email: user.email,
              userType: user.userType,
              city: user.city,
              state: user.state
            };
            jwt.sign(
              payload, 
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            )
          } else {
            return res.status(400).json({password: "Incorrect password"});
          }
        })
    })
})

module.exports = router;
