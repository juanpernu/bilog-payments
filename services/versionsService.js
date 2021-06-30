import { axiosInstance } from "../utils";

export const getVersionContent = async (version) => {
  const { data } = await axiosInstance.get(`/api/versions?version=${version}`);
  return data;
};
