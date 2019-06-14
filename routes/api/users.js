const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.get("/test", (req, res) => {
  res.json({msg: "this is the user route"});
});

// create a new user
router.post("/register", (req,res) => {
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

        newUser.save()
          .then(user => res.send(user)).catch(err => res.send(err))
      }
    })
})

module.exports = router;
