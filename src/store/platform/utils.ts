import { makeAutoObservable } from "mobx";
import {
  businessCategoryController,
  marketController,
  stateController,
} from "../../config/sdk";
import { Market, State } from "../../sdk/market";
import { handleAxiosError } from "../../utils";

class PlatformUtilsManager {
  states: State[] = [];
  businessCategories: State[] = [];

  markets: Market[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async loadCategories() {
    try {
      let response = await businessCategoryController.getAll();
    } catch (e) {
      let check = handleAxiosError(e);
    }
  }

  async loadStates() {
    try {
      let response = await stateController.getAllMarkets();
    } catch (e) {
      let check = handleAxiosError(e);
    }
  }

  async loadMarkets() {
    try {
      let response = await marketController.getAllMarkets1();
    } catch (e) {
      let check = handleAxiosError(e);
    }
  }
}

export const platformUtilsManager = new PlatformUtilsManager();
