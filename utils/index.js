import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://apibr.bilog.com.ar/",
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [
    function (d) {
      const data = JSON.parse(d);
      if (data.mensajeError) {
        throw new Error(`Ocurrió un error`);
      }
      return data;
    },
  ],
});

export const getVersion = (pricing) => {
  const {
    add_administration,
    add_auditory,
    prof_payment,
    os_payment,
    prof_count_number,
  } = pricing;

  let versionId;

  if (prof_count_number === 1 && prof_payment) versionId = "full";
  if (
    prof_count_number > 1 &&
    (prof_payment || add_administration || add_auditory || os_payment)
  )
    versionId = "full";
  if (
    prof_count_number === 1 &&
    (add_administration || add_auditory || os_payment)
  )
    versionId = "standard";
  if (prof_count_number > 1) versionId = "smallpremium";
  if (prof_count_number === 1) versionId = "small";

  return versionId;
};

export const formatPricing = (pricing) => {
  const {
    add_administration,
    add_auditory,
    add_osde,
    add_sms,
    add_facturation,
    email,
    name,
    phone,
    prof_count_number,
    pc_count_number,
    profession,
  } = pricing;

  return {
    prof_count_number,
    pc_count_number,
    client: {
      email,
      name,
      phone,
      profession,
    },
    version: {
      id: getVersion(pricing),
      addons: {
        add_administration,
        add_auditory,
        add_osde,
        add_sms,
        add_facturation,
      },
    },
  };
};

export const formatVersion = (version) => {
  const versions = {
    small: "Small",
    smallpre: "Small Premium",
    standard: "Standard",
    full: "Full",
  };

  return versions[version];
};

export const addonPriceMapper = (type, obj) => {
  const quantity = [250, 500, 1500];
  const mapped = obj[type].map((item, index) => {
    return {
      quantity: quantity[index],
      price: item.price,
    };
  });

  return mapped;
};

export const billingInitialState = {
  pricing: {
    version: null,
    price: {
      initial: "",
      simple: "",
      complex: "",
    },
    addons: {
      add_administration: false,
      add_auditory: false,
      add_osde: false,
    },
    sms: [
      {
        id: null,
        price: "",
      },
    ],
    emkt: [
      {
        id: null,
        price: "",
      },
    ],
  },
  profCount: 1,
  selected: { sms: false, emkt: false },
};

export const splitAddons = (addons) => addons.split(",");
