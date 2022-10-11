import { AuthControllerApi, UserControllerApi } from "../sdk/auth";
import axios from "axios";
export let authController = new AuthControllerApi();

export let userController = new UserControllerApi();

export function configureClientSDK(token: string) {
  userController = new UserControllerApi(
    {
      isJsonMime: (mime: any) => {
        return true;
      },
    },
    undefined,
    axios.create({ headers: { Authorization: `Bearer ${token}` } })
  );

  authController = new AuthControllerApi(
    {
      isJsonMime: (mime: any) => {
        return true;
      },
    },
    undefined,
    axios.create({ headers: { Authorization: `Bearer ${token}` } })
  );
}
