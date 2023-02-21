// Required Field Input Validation

function validate(req, res, next) {
  const treatment = req.body;
  if (
    treatment.name &&
    typeof treatment.name === "string" &&
    treatment.treatment_image &&
    typeof treatment.treatment_image === "string" &&
    treatment.category &&
    typeof treatment.category === "string" &&
    treatment.description &&
    typeof treatment.description === "string" &&
    treatment.therapist &&
    typeof treatment.therapist === "string" &&
    treatment.therapist_image &&
    typeof treatment.therapist_image === "string" &&
    Number(treatment.price) !== "NaN"
  ) {
    next();
  } else {
    res
      .status(400)
      .json({ error: "The typeOf Value is incorrect." });
  }
}



module.exports = { validate };
