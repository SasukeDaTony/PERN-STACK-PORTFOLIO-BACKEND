//DEPENDENCIES
const cors = require("cors");
const express = require("express");
const allTreatments = require("./controllers/treatmentsController");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/treatments", allTreatments);

//ROUTES
app.get("/", (req, res) => {
  res.send("WELCOME TO TONY'S BODY SHOP!");
});

app.get("*", (req, res) => {
  res.status(404).send("Requested Page Not Found. HTTP 404");
});

//EXPORT
module.exports = app;
