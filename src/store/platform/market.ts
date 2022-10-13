import { makeAutoObservable } from "mobx";
import {
  businessCategoryController,
  marketController,
  stateController,
} from "../../config/sdk";
import { Market, State } from "../../sdk/market";
import { handleAxiosError } from "../../utils";

class PlatformMarketsManager {
  markets: Market[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async loadMarkets() {
    try {
      let response = await marketController.getAllMarkets1();
    } catch (e) {
      let check = handleAxiosError(e);
    }
  }
}

export const platformMarketsUtilsManager = new PlatformMarketsManager();
