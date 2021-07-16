import { axiosInstance } from "../utils";
import Content from "../content/versions";

//TODO: We shouldn't use this
const versions = ["small", "smallpre", "std", "full"];

export const getVersionContent = async (version) => {
  if (versions.includes(version)) {
    const data = await axiosInstance.get(`/apiventas/${version}`);
    return data;
  }

  const data = Content["default"];
  return { data };
};
