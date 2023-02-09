//CONFIGURATION
const db = require("../db/dbConfig.js");

//GET ALL Function
const getAllTreatments = async () => {
  try {
    const allTreatments = await db.any("SELECT * FROM treatments");
    return allTreatments;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//GET ONE Function
const getTreatment = async (id) => {
  try {
    const oneTreatment = await db.oneOrNone(
      "SELECT * FROM treatments WHERE id=$1",
      id
    );
    return oneTreatment;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//CREATE Function
const createTreatment = async (treatment) => {
  // let { name, treatment_image, category, description, price, therapist, therapist_image } = treatment
  try {
    const newTreatment = await db.one(
      "INSERT INTO treatments (name, treatment_image, category, description, price, therapist, therapist_image) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        treatment.name,
        treatment.treatment_image,
        treatment.category,
        treatment.description,
        treatment.price,
        treatment.therapist,
        treatment.therapist_image,
      ]
    );
    return newTreatment;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// UPDATE Function
const putTreatment = async (treatment, id) => {
  //  let { name, treatment_image, category, description, price, therapist, therapist_image } = treatment

  try {
    const updatedTreatment = db.one(
      "UPDATE treatments SET name=$1, treatment_image=$2, category=$3, description=$4, price=$5, therapist=$6, therapist_image=$7 WHERE id=$8 RETURNING *",
      [
        treatment.name,
        treatment.treatment_image,
        treatment.category,
        treatment.description,
        treatment.price,
        treatment.therapist,
        treatment.therapist_image,
        id,
      ]
    );
    return updatedTreatment;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//DELETE Function
const deleteTreatment = async (id) => {
  try {
    const deletedTreatment = await db.one(
      "DELETE FROM treatments WHERE id = $1 RETURNING *",
      id
    );
    return deletedTreatment;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAllTreatments,
  getTreatment,
  createTreatment,
  putTreatment,
  deleteTreatment,
};
