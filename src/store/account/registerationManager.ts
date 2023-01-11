import { showNotification } from "@mantine/notifications";
import {
  completeNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { makeAutoObservable, observable } from "mobx";
import { authController } from "../../config/sdk";
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
      let response = await authController.authControllerSignup(request);
      console.log(response);
      authManager.initAccountToken(response.data.token);
      completeNavigationProgress();
    } catch (err) {
      let message = handleAxiosError(err);
      showNotification({ message: "Email/Phone number already in use..." });
      completeNavigationProgress();
    }
  }
}

export const registerationManager = new RegisterationManager();
