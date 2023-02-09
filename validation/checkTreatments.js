// Required Field Input Validation
function validate(treatment) {
  return (
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
  );
}

module.exports = { validate };
