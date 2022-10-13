import {
  completeNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { makeAutoObservable, runInAction } from "mobx";
import {
  shopAdminController,
  shopProductAdminController,
  shopProductController,
} from "../../config/sdk";
import {
  Market,
  Shop,
  ShopDto,
  ShopProduct,
  ShopProductDto,
  State,
  UpdateShopDto,
} from "../../sdk/market";
import {
  handleAxiosError,
  handleAxiosResponse,
  handleSuccessEvent,
} from "../../utils";

class AdminShopManager {
  shops: Shop[] = [];
  active_shop_id: number | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  initShop(shop_id: string) {
    runInAction(() => {
      this.active_shop_id = this.active_shop_id;
    });
  }

  async loadShops(): Promise<boolean> {
    try {
      let response = await shopAdminController.getAllAdminShops();

      let data = handleAxiosResponse(response);

      handleSuccessEvent("Loaded admin shops");
      return true;
    } catch (e) {
      let check = handleAxiosError(e);
      return false;
    }
  }

  async createShop(payload: ShopDto): Promise<boolean> {
    try {
      startNavigationProgress();
      let response = await shopAdminController.createShop(payload);

      let data = handleAxiosResponse(response);
      handleSuccessEvent("Product was created successfully");
      completeNavigationProgress();
      return true;
    } catch (e) {
      let check = handleAxiosError(e);
      return false;
    }
  }

  async updateShop(shop_id: number, payload: UpdateShopDto): Promise<boolean> {
    try {
      let response = await shopAdminController.updateShop(shop_id, payload);

      let data = handleAxiosResponse(response);

      handleSuccessEvent("Product was updated successfully");
      return true;
    } catch (e) {
      let check = handleAxiosError(e);
      return false;
    }
  }
}

export const adminShopManager = new AdminShopManager();
