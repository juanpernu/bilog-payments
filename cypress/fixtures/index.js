const mockPOSTform = {
  small: {
    client: {
      email: "test@test.com.ar",
      name: "Test cypress",
      phone: "1144442222",
      profession: "Odontologo",
      prof_count_number: "3",
    },
    version: {
      id: "small",
      addons: {
        add_administration: "false",
        add_auditory: "false",
        add_osde: "false",
      },
    },
  },
};

const mockUserData = {
  name: "",
  email: "",
  phone: "",
  profession: "",
  prof_count_number: 0,
  add_administration: true,
  add_auditory: true,
  add_osde: true,
  add_sms: false,
  add_facturation: false,
  prof_payment: false,
  os_payment: false,
};

export { mockPOSTform, mockUserData };
