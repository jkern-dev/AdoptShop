const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

// import data models
const User = require("./models/User");

// import api routes
const users = require("./routes/api/users");
const pets = require("./routes/api/pets")

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log(err));

// respond to json requests, urlEncoded allows to work with postman
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const user = new User({
    email: "jkern620@gmail.com",
    userType: "adoptee",
    password: "password",
    city: "Palo Alto",
    state: "CA",
  });
  user.save();
  res.send("Hello AdoptShop!");
});

app.use("/api/users", users);
app.use("/api/pets", pets);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})