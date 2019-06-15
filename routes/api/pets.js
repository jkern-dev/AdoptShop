const express = require("express");
const router = express.Router();
const passport = require('passport');

const Pet = require('../../models/Pet');
const validatePetInput = require('../../validation/pet');

// get all pets 
router.get('/', (req,res) => {
  Pet.find()
    .sort({date: -1})
    .then(pets => res.json(pets))
    .catch(err => res.status(404).json({nopetsfound: "No Pets Found"}));
});

// get specific pet
router.get('/:id', (req,res) => {
  Pet.findById(req.params.id)
    .then(pet => res.json(pet))
    .catch(err => res.status(404).json({nopetfound: "No Pet Found"}));
});

// create a pet 
router.post('/',
  passport.authenticate('jwt', { session: false}),
  (req,res) => {
    const { errors, isValid } = validatePetInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPet = new Pet({
      shelter: {
        _id: req.user.id,
        city: req.user.city,
        state: req.user.state
      },
      pet_type: req.body.pet_type,
      breed: req.body.breed,
      name: req.body.name,
      age: req.body.age,
      description: req.body.description
    });
    newPet.save()
      .then(pet => res.json(pet));
  }
);

router.get("/test", (req, res) => {
  res.json({ msg: "this is the pets route" });
});

module.exports = router;