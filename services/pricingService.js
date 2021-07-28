import { axiosInstance, formatPricing, formatClientBill } from "../utils";

export const saveNewBilling = async (bill) => {
  const body = formatPricing(bill);
  const { data } = await axiosInstance.post(`/apiventas/new`, body);

  return data;
};

export const updateBill = async (bill, rowversion, clientId) => {
  const body = formatClientBill(bill, clientId, rowversion);
  const { data } = await axiosInstance.post(`/apiventas/update`, body);

  return data;
};
