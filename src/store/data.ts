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
        console.log(res);
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

  filterProducts(id: string) {
    if (id == "") {
      this.loadProducts();
      return;
    }
    runInAction(() => {
      this.activeCategory = id;
    });

    console.log("loading");
    startNavigationProgress();
    productApiController
      .productControllerGetProductsFiltered(id)
      .then(async (res) => {
        console.log(res);
        let data = res.data;
        console.log(data);
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
        console.log(res);
        let data = res.data;
        console.log(res)
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
