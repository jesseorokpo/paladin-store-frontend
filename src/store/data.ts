import {
  resetNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { makeAutoObservable, runInAction } from "mobx";
import { productApiController, taxonomyApiController } from "../config/sdk";
import { Product, PublicProductsResponse, Taxonomy } from "../sdk/catalog";

class DataManager {
  productsHome: PublicProductsResponse = {
    top_products: [],
    is_trending: [],
  };
  products: Product[] = [];

  categories: Taxonomy[] = [];

  activeCategory: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  loadCategories() {
    taxonomyApiController
      .taxonomyControllerGet()
      .then(async (res) => {
        let data = res.data;

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
        runInAction(() => {
          this.products = data;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  filterProducts(id: string) {
    if (id == "") {
      this.loadProducts();
      return;
    }
    runInAction(() => {
      this.activeCategory = id;
    });

    startNavigationProgress();
    productApiController
      .productControllerGetProductsFiltered(id)
      .then(async (res) => {
        let data = res.data;

        runInAction(() => {
          this.products = data;
        });
        resetNavigationProgress();
      })
      .catch((e) => {
        console.log(e);
        resetNavigationProgress();
      });
  }

  loadProductsHome() {
    productApiController
      .productControllerGetPublic()
      .then(async (res) => {
        let data = res.data;

        runInAction(() => {
          this.productsHome = data;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export const dataManager = new DataManager();
