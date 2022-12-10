import { AuthApi } from "../sdk/auth";
import axios from "axios";
import {
  LockerApi,
  OrderControllerApi,
  ProductApi,
  TaxonomyApi,
} from "../sdk/catalog";
import { TOKEN } from "./config";

const API_URL = "https://0b4a-197-210-53-67.eu.ngrok.io";

let config = {
  accessToken: TOKEN,
  basePath: API_URL,
  isJsonMime: (mime: any) => {
    return true;
  },
};

let axiosConfig = axios.create({
  baseURL: API_URL,
  headers: {
    "Bypass-Tunnel-Reminder": "bypass",
    "ngrok-skip-browser-warning": "bypass",
  },
});

export let authController = new AuthApi(config, undefined, axiosConfig);
export let productApiController = new ProductApi(
  config,
  undefined,
  axiosConfig
);
export let taxonomyApiController = new TaxonomyApi(
  config,
  undefined,
  axiosConfig
);
export let lockerApiController = new LockerApi(config, undefined, axiosConfig);
export let orderControllerApi = new OrderControllerApi(
  config,
  undefined,
  axiosConfig
);

export function configureClientSDK(token: string) {
  let config = {
    accessToken: token,
    basePath: API_URL,
    isJsonMime: (mime: any) => {
      return true;
    },
  };
  // 
  productApiController = new ProductApi(config, undefined, axiosConfig);
  taxonomyApiController = new TaxonomyApi(config, undefined, axiosConfig);
  lockerApiController = new LockerApi(config, undefined, axiosConfig);
  orderControllerApi = new OrderControllerApi(config, undefined, axiosConfig);
  authController = new AuthApi(config, undefined, axiosConfig);

  localStorage.setItem("u-token", token);
}
