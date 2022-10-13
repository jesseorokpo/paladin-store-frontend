import { makeAutoObservable } from "mobx";
import {
  shopController,
  shopProductController,
} from "../../config/sdk";
import { Market, Shop, ShopProduct, State } from "../../sdk/market";
import { handleAxiosError } from "../../utils";

class PlatformShopProductsManager {
  shopProducts: { [key: string]: ShopProduct[] } = {};
  constructor() {
    makeAutoObservable(this);
  }

  async loadShopProducts(shop_id: number) {
    try {
      let response = await shopProductController.getProductByShopId(shop_id, {
        page: 0,
        size: 50,
      });

      return; // products
    } catch (e) {
      let check = handleAxiosError(e);
    }
  }
}

export const platformShopProductsManager = new PlatformShopProductsManager();
