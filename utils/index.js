import axios from "axios";

const devBaseUrl = "https://bilog-payments-juanpernu.vercel.app/";

export const setBaseUrl = setBaseUrlFn.bind(null);

async function setBaseUrlFn(env) {
  if (env === "production")
    axiosInstance.defaults.baseURL = "https://payments.bilog.com.ar/";
}

export const axiosInstance = axios.create({
  baseURL: devBaseUrl,
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [
    function (data) {
      const jsonData = JSON.parse(data);
      if (!jsonData.success) {
        throw new Error(`Ocurrió un error`);
      }
      return jsonData.data;
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
