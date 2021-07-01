const Steps = [
  [
    {
      question: "Cual es la cantidad de profesionales que tiene su empresa?",
      field: "numeric",
      key: "prof_number",
    },
    {
      question:
        "Trabajas con profesionales y necesitas realizar la liquidación?",
      field: "checkbox",
      key: "prof_payment",
    },
    {
      question: "Necesitas realizar la liquidación a obras sociales?",
      field: "checkbox",
      key: "os_payment",
    },
  ],
  [
    {
      question: "Precisa un Módulo Auditoría",
      field: "checkbox",
      key: "add_auditory",
    },
    {
      question: "Precisa un Módulo Administración",
      field: "checkbox",
      key: "add_administration",
    },
    {
      question: "Precisa un Módulo OSDE",
      field: "checkbox",
      key: "add_osde",
    },
  ],
  [
    {
      question: "Cual es tu nombre y apellido?",
      field: "text",
      key: "name",
    },
    {
      question: "Podrias brindarnos un Email de contacto?",
      field: "text",
      key: "email",
    },
    {
      question: "También su numero de Telefono:",
      field: "text",
      key: "phone",
    },
    {
      question: "Cual es su profesión?",
      field: "dropdown",
      key: "profession",
    },
  ],
];

export default Steps;
