const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : ""
  data.password = validText(data.password) ? data.password : ""
  data.city = validText(data.city) ? data.city : ""
  data.state = validText(data.state) ? data.state : ""
}