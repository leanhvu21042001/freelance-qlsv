import axios from "axios";
import qs from "qs";
import moment from "moment";
import { camelizeKeys, decamelizeKeys } from "humps";

const request = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

request.interceptors.response.use(
  (response) => {
    if (
      response.data &&
      response.headers["content-type"] === "application/json"
    ) {
      response.data = camelizeKeys(response.data);
    }
    return response.data;
  },
  (error) => {
    Promise.reject(error);
  }
);

request.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    newConfig.url = `${config.url}`;

    newConfig.paramsSerializer = (params) =>
      qs.stringify(params, {
        encode: false,
        serializeDate: (date) => moment(date).format("YYYY-MM-DD"),
        arrayFormat: "brackets",
      });

    if (newConfig.headers["Content-Type"] === "multipart/form-data") {
      return newConfig;
    }

    if (config.params) {
      newConfig.params = decamelizeKeys(config.params);
    }

    if (config.data) {
      newConfig.data = decamelizeKeys(config.data);
    }

    return newConfig;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default request;
