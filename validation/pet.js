const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePetInput(data) {
  let errors = {};
  data.pet_type = validText(data.pet_type) ? data.pet_type : '';
  data.breed = validText(data.breed) ? data.breed : '';
  data.name = validText(data.name) ? data.name : '';
  data.description = validText(data.description) ? data.description : '';


  if (Validator.isEmpty(data.pet_type)) {
    errors.pet_type = "Pet type is required";
  }

  if (Validator.isEmpty(data.breed)) {
    errors.breed = "Breed is required";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age is required";
  }

  if (!Validator.isNumeric(data.age)) {
    errors.age = "Age must be numeric"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};