export function useValidations(dataToValidate, index) {
  const errors = {};
  const requiredMsg = "* Campo requerido";
  const requiredFields = {
    1: ["prof_count_number"],
    2: [],
    3: ["name", "email", "phone", "profession"],
  };

  requiredFields[index].forEach((requiredField) => {
    if (!dataToValidate[requiredField]) {
      errors[requiredField] = requiredMsg;
    }
  });

  return Object.entries(errors).length && errors;
}
