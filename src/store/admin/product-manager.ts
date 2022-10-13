import { makeAutoObservable, runInAction } from "mobx";
import {
  shopProductAdminController,
  shopProductController,
} from "../../config/sdk";
import { Market, ShopProduct, ShopProductDto, State } from "../../sdk/market";
import {
  handleAxiosError,
  handleAxiosResponse,
  handleSuccessEvent,
} from "../../utils";

class AdminProductManager {
  products: ShopProduct[] = [];
  active_shop_id: number | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  initShop(shop_id: string) {
    runInAction(() => {
      this.active_shop_id = this.active_shop_id;
    });
  }

  async loadStoreProducts(): Promise<boolean> {
    try {
      let response = await shopProductController.getProductByShopId(
        this.active_shop_id ?? 0,
        { page: 0, size: 50 }
      );

      let data = handleAxiosResponse(response);

      handleSuccessEvent("Store products loaded successfully");
      return true;
    } catch (e) {
      let check = handleAxiosError(e);
      return false;
    }
  }

  async createProduct(payload: ShopProductDto): Promise<boolean> {
    try {
      let response = await shopProductAdminController.createProduct(
        this.active_shop_id ?? 0,
        payload
      );

      let data = handleAxiosResponse(response);

      handleSuccessEvent("Product was created successfully");

      return true;
    } catch (e) {
      let check = handleAxiosError(e);
      return false;
    }
  }

  async updateProduct(
    product_id: number,
    payload: ShopProductDto
  ): Promise<boolean> {
    try {
      let response = await shopProductAdminController.updateProduct(
        product_id,
        this.active_shop_id ?? 0,
        payload
      );

      let data = handleAxiosResponse(response);

      handleSuccessEvent("Product was updated successfully");
      return true;
    } catch (e) {
      let check = handleAxiosError(e);
      return false;
    }
  }

  async deleteProduct(
    product_id: number,
    payload: ShopProductDto
  ): Promise<boolean> {
    try {
      let response = await shopProductAdminController.deleteProductById(
        product_id,
        this.active_shop_id ?? 0
      );

      let data = handleAxiosResponse(response);

      runInAction(() => {
        this.products = this.products.filter(
          (element) => element.id == product_id
        );
      });

      handleSuccessEvent("Product was deleted successfully");

      return true;
    } catch (e) {
      let check = handleAxiosError(e);
      return false;
    }
  }
}

export const adminProductManager = new AdminProductManager();
