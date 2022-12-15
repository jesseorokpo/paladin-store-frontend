import { AuthApi } from "../sdk/auth";
import axios from "axios";
import {
  LockerApi,
  OrderControllerApi,
  ProductApi,
  TaxonomyApi,
  UsersControllerApi,
} from "../sdk/catalog";
import { TOKEN } from "./config";

let config = {
  accessToken: TOKEN,
  isJsonMime: (mime: any) => {
    return true;
  },
};

let axiosConfig = axios.create({
  headers: {
    "Bypass-Tunnel-Reminder": "bypass",
    "ngrok-skip-browser-warning": "bypass",
  },
});

export let authController = new AuthApi(config, undefined, axiosConfig);

export let userController = new UsersControllerApi(
  config,
  undefined,
  axiosConfig
);

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
  userController = new UsersControllerApi(config, undefined, axiosConfig);

  localStorage.setItem("u-token", token);
}
