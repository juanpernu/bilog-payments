import axios from "axios";

const devBaseUrl = "http://localhost:3000/";

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
