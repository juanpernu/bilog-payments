import { axiosInstance, formatPricing } from "../utils";

export const saveNewBilling = async (bill) => {
  const body = formatPricing(bill);
  const data = await axiosInstance.post(`/apiventas/new`, body);

  console.log("data response", data);

  return data;
};
