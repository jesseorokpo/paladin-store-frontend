import { AuthApi } from "../sdk/auth";
import axios from "axios";
import {
  LockerApi,
  OrderControllerApi,
  ProductApi,
  TaxonomyApi,
} from "../sdk/catalog";

const API_URL = "";

let config = {
  isJsonMime: (mime: any) => {
    return true;
  },
};

let axiosConfig = axios.create({
  baseURL: API_URL,
  headers: {
    "Bypass-Tunnel-Reminder": "bypass",
  },
});

export let authController = new AuthApi();
export let productApiController = new ProductApi();
export let taxonomyApiController = new TaxonomyApi();
export let lockerApiController = new LockerApi();
export let orderControllerApi = new OrderControllerApi();

export function configureClientSDK(token: string) {
  let config = {
    accessToken: token,
    isJsonMime: (mime: any) => {
      return true;
    },
  };

  productApiController = new ProductApi(config, undefined, axiosConfig);
  taxonomyApiController = new TaxonomyApi(config, undefined, axiosConfig);
  lockerApiController = new LockerApi(config, undefined, axiosConfig);
  orderControllerApi = new OrderControllerApi(config, undefined, axiosConfig);
  authController = new AuthApi(config, undefined, axiosConfig);

  localStorage.setItem("u-token", token);
}
