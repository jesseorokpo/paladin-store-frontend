import { makeAutoObservable } from "mobx";
import { shopController, stateController } from "../../config/sdk";
import { Market, Shop, State } from "../../sdk/market";
import { handleAxiosError } from "../../utils";

class PlatformShopManager {
  shops: Shop[] = [];
  marketShops: { [key: string]: Shop[] } = {};
  shopByHandle: { [key: string]: Shop } = {};
  constructor() {
    makeAutoObservable(this);
  }

  async loadAllStores() {
    try {
      let response = await shopController.getAllStore({
        page: 0,
        size: 50,
        sort: [],
      });
    } catch (e) {
      let check = handleAxiosError(e);
    }
  }

  async loadMaketStores(market_id: number) {
    try {
      let response = await shopController.getMarketStores(
        { page: 0, size: 50 },
        market_id
      );
    } catch (e) {
      let check = handleAxiosError(e);
    }
  }

  async loadStoreByHandle(store_handle: string) {
    try {
      let response = await shopController.getStoreByHandle(store_handle);
    } catch (e) {
      let check = handleAxiosError(e);
    }
  }
}

export const platformMarketsUtilsManager = new PlatformShopManager();
