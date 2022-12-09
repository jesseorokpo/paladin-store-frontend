import { makeAutoObservable, runInAction } from "mobx";
import { productApiController, taxonomyApiController } from "../config/sdk";
import { Product, Taxonomy } from "../sdk/catalog";

class DataManager {
  products: Product[] = [];

  categories: Taxonomy[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadCategories() {
    taxonomyApiController
      .taxonomyControllerGet()
      .then(async (res) => {
        let data = res.data;
        console.log(data);
        runInAction(() => {
          this.categories = data;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  loadProducts() {
    productApiController
      .productControllerGet()
      .then(async (res) => {
        let data = res.data;
        console.log(data);
        runInAction(() => {
          this.products = data;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export const dataManager = new DataManager();
