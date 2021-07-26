const Steps = [
  [
    {
      question: "¿Cuantós profesionales trabajan en la clínica o consultorio?",
      field: "numeric",
      key: "prof_count_number",
    },
    {
      question: "¿Necesitas hacer la liquidación a tus profesionales?",
      hint: "Definís montos o porcentajes a pagar a cada profesional por la prestación realizada. Incluso podes hacer un mix de valores a pagar a cada uno.",
      field: "checkbox",
      key: "prof_payment",
    },
    {
      question: "¿Necesitas hacer la liquidación a las obras sociales?",
      hint: "Te permite generar los informes para facturar a las obras sociales, así ahorras tiempo de papeleo y dinero.",
      field: "checkbox",
      key: "os_payment",
    },
  ],
  [
    {
      question: "¿Necesitas el Módulo Auditoría?",
      hint: "Sumamente eficaz para aumentar los ingresos y prevenir pérdidas de dinero ya que te avisa si la prestación que estás cargando está fuera de garantía y del posible rechazo de parte de la obra social.",
      field: "checkbox",
      key: "add_auditory",
    },
    {
      question: "¿Necesitas el Módulo Administración?",
      hint: "Controla todos los ingresos, egresos, pagos a proveedores, compras, etc. Queda registrado quien cargo el pago y podes limitar al usuario a que no visualice ó elimine información delicada.",
      field: "checkbox",
      key: "add_administration",
    },
    {
      question: "¿Necesitas el Módulo OSDE?",
      hint: "Podés liquidar a la prepaga, autorizar carnets, tratamientos de protesis y ortodoncia, pero lo mejor de todo es que después podes liquidar al odontólogo por los tratamientos pagados por la prepaga.",
      field: "checkbox",
      key: "add_osde",
    },
  ],
  [
    {
      question: "Por favor, indicanos tu nombre y apellido",
      field: "text",
      key: "name",
    },
    {
      question: "¿Nos podrías dejar tu email?",
      field: "text",
      key: "email",
    },
    {
      question: "¿Nos podrías dejar tu teléfono?",
      hint: "Es importante para poder ponernos en contacto con vos.",
      field: "text",
      key: "phone",
      placeholder: "(+54) (011) 4444-4444",
    },
    {
      question: "¿Cuál es su profesión?",
      field: "dropdown",
      key: "profession",
    },
  ],
];

export default Steps;
