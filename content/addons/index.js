const addons = {
  adm: {
    id: "adm",
    title: "Módulo administración",
    description:
      "Controlá todos los ingresos, egresos, pagos a proveedores y compras de tu consultorio o clínica.",
    icon: "admin",
    color: "#1F266F",
    price: 6000,
    items: [
      {
        icon: "check",
        text: "Registro diario de ingresos, egresos, pagos y compras.",
      },
      {
        icon: "check",
        text: "Gestión de usuarios por permisos.",
      },
    ],
  },
  aud: {
    id: "aud",
    title: "Módulo auditoría",
    description:
      "Aumentá los ingresos y reducí las perdidas de dinero con una auditoría eficiente.",
    icon: "control",
    color: "#ED0F6A",
    price: 3600,
    items: [
      {
        icon: "check",
        text: "Auditoria de garantía de prestaciones.",
      },
      {
        icon: "check",
        text: "Control de posibles rechazos de las obras sociales.",
      },
    ],
  },
  osde: {
    id: "osde",
    title: "Módulo osde",
    description: "Funcionalidad específica para liquidar a la prepaga OSDE.",
    icon: "medicalinsurance",
    color: "#7237E5",
    price: 3600,
    items: [
      {
        icon: "check",
        text: "Gestión de autorizaciones de carnets y tratamientos.",
      },
      {
        icon: "check",
        text: "Liquidación a profesionales discriminada por obra social.",
      },
    ],
  },
};

export default addons;
