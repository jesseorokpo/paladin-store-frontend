import { showNotification } from "@mantine/notifications";
import {
  completeNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { makeAutoObservable, observable } from "mobx";
import { AuthApi, SignUpDto } from "../../sdk/auth";
import { handleAxiosError } from "../../utils";
import { authManager } from "./auth";

class RegisterationManager {
  //@ts-ignore
  user: User;
  constructor() {
    makeAutoObservable(this, { user: observable });
  }

  async createAccount(request: SignUpDto) {
    try {
      startNavigationProgress();
      let response = await new AuthApi().authControllerSignup(request);
      console.log(response);
      authManager.initAccountToken(response.data.token);
      completeNavigationProgress();
    } catch (err) {
      let message = handleAxiosError(err);
      showNotification({ message: "Authentication failed..." });
      completeNavigationProgress();
    }
  }
}

export const registerationManager = new RegisterationManager();
