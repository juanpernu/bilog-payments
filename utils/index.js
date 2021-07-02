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

  // TODO: When versions page is ready, we should
  // get this from version contents
  return {
    id: "small",
    price: {
      initial: 9000,
      simple: 5250,
      complex: 7200,
    },
  };
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
    profession,
  } = pricing;

  const { id, price } = getVersion(pricing);

  return {
    prof_count_number,
    client: {
      email,
      name,
      phone,
      profession,
    },
    version: {
      id,
      price,
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
