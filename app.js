const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;


const users = require("./routes/api/users");
const pets = require("./routes/api/pets")

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello AdoptShop!");
});

app.use("/api/users", users);
app.use("/api/pets", pets);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})