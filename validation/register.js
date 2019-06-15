const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : ""
  data.userType = validText(data.userType) ? data.userType : ""
  data.password = validText(data.password) ? data.password : ""
  data.city = validText(data.city) ? data.city : ""
  data.state = validText(data.state) ? data.state : ""

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required"
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required"
  }

  if (!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = "Password must be between 6 and 30 characters"
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City is required"
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State is required"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}