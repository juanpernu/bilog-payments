const Default = [
  {
    icon: "alert",
    title: "Alertas y notificaciones",
    description:
      "Alertas para saber a quienes tenés que recitar, las tareas a realizar, los trabajos de laboratorio que ingresan hoy y el stock mínimo de tu consultorio. Puntos claves para optimizar tu trabajo.",
  },
  {
    icon: "schedule",
    title: "Agenda de turnos",
    description:
      "Agenda turnos en forma eficiente, mantené tu agenda siempre completa, herramientas como lista de espera, confirmación de turnos y envío de mails, te ayudan a gestionarla. ¡Anímate a descubrirlas!",
  },
  {
    icon: "images",
    title: "Imágenes",
    description:
      "Tenés la información centralizada, contás con la historia clínica del paciente y las imágenes. Ahora podés guardar desde la ficha papel escaneada hasta las imágenes de gran tamaño. ¡Te asesoramos!",
  },
  {
    icon: "notes",
    title: "Historia clínica y odontograma",
    description:
      "Odontograma interactivo y evolutivo, completo y fácil de utilizar. Guiate de forma sencilla por los colores y símbolos que indican el estado de la pieza dental. ¡Cargá la historia clínica del paciente con el dictado por voz desde la App!",
  },
  {
    icon: "budget",
    title: "Presupuestos y pagos",
    description:
      "Llevar el control de los presupuestos y pagos de tus pacientes nunca fue tan simple. Configurá tus medios de pago y visualizá de forma sencilla la cuenta corriente de los pacientes.",
  },
  {
    icon: "devices",
    title: "App Mobile",
    description:
      "App en IOS y Android para que los profesionales del consultorio o clínica tengan acceso en línea al estado de sus citas, pacientes, presupuestos, etc. ¡Configurá los permisos de acceso personalizados por usuario! Administrá la información sensible.",
  },
];

const Standard = [
  {
    icon: "weekschedule",
    title: "Agenda de turnos semanal",
    description:
      "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
  },
  {
    icon: "statistics",
    title: "Estadísticas de turnos y recitado",
    description:
      "Agenda turnos en forma eficiente, mantene tu agenda siempre completa, tenés miles de herramientas como la lista de espera, la confirmación de turnos, y el envío de mails, que te ayudan a gestionarla. ¡Anímate a descubrirlas!",
  },
  {
    icon: "generalstatistics",
    title: "Estadísticas generales",
    description:
      "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
  },
  {
    icon: "stock",
    title: "Stock",
    description:
      "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
  },
  {
    icon: "laboratory",
    title: "Laboratorios",
    description:
      "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
  },
  {
    icon: "star",
    title: "Especialidades",
    description:
      "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
  },
  {
    icon: "billing",
    title: "Facturación a Obras Sociales",
    description:
      "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
  },
];

const Full = [
  ...Standard,
  {
    icon: "professionals",
    title: "Liquidación a profesionales",
    description:
      "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
  },
];

export const Content = {
  default: Default,
  standard: Standard,
  full: Full,
};
