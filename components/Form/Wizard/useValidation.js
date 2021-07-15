export function useValidations(dataToValidate, index) {
  const errors = {};
  const requiredMsg = "* Campo requerido";
  const requiredFields = {
    1: ["prof_count_number"],
    2: [],
    3: ["name", "email", "phone", "profession"],
  };

  const emailReg = new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/gm
  );

  requiredFields[index].forEach((requiredField) => {
    if (!dataToValidate[requiredField]) {
      errors[requiredField] = requiredMsg;
    }
    if (requiredField === "email" && !emailReg.test(dataToValidate["email"])) {
      errors[requiredField] = "Email invalido";
    }
  });

  return Object.entries(errors).length && errors;
}
