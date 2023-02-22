//CONFIGURATION
const express = require("express");
const treatments = express.Router();
const {
  getAllTreatments,
  getTreatment,
  createTreatment,
  deleteTreatment,
  putTreatment,
} = require("../queries/treatments");
const { validate } = require("../validation/checkTreatments.js");


//INDEX ROUTE
treatments.get("/", async (req, res) => {
  const { category } = req.query;
  let filteredTreatments = await getAllTreatments();
  if (category) {
    filteredTreatments = filteredTreatments.filter((treatment) => {
      return treatment.category.toString() === category;
    });
  }
  if (filteredTreatments[0]) {
    res.status(200).json(filteredTreatments);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW ROUTE
treatments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const treatment = await getTreatment(id);
  console.log(treatment);
  if (treatment) {
    res.json(treatment);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

//CREATE ROUTE
treatments.post("/", validate, async (req, res) => {
  try {
    const treatment = await createTreatment(req.body);
    return res.json(treatment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//DELETE ROUTE
treatments.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedTreatment = await deleteTreatment(id);
  if (deletedTreatment.id) {
    res.status(200).json(deletedTreatment);
  } else {
    res.status(404).json("Treatment Not Found");
  }
});

//UPDATE ROUTE
treatments.put("/:id", validate, async (req, res) => {
  try {
    const treatment = await putTreatment(req.body, req.params.id);
    return res.json(treatment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = treatments;
