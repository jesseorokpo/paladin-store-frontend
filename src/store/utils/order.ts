import { showNotification } from "@mantine/notifications";
import {
  resetNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { cartManager } from "@store/cart";
import { makeAutoObservable, runInAction } from "mobx";
import { lockerApiController, orderControllerApi } from "../../config/sdk";
import { Order, PublishOrderDto, UpdateLockerDto } from "../../sdk/catalog";

class Manager {
  items: Order[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  load() {
    orderControllerApi
      .orderControllerGet()
      .then(async (res) => {
        let data = res.data;
        runInAction(() => {
          this.items = data;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateItem(id: string, payload: UpdateLockerDto) {
    lockerApiController.lockerControllerUpdate(id, payload).then((payload) => {
      runInAction(() => {
        // @ts-ignore
        const index = this.items.findIndex((element) => element._id == id);
        this.items[index] = { ...payload, ...this.items[index] };
      });
    });
  }

  publishItem(payload: PublishOrderDto) {
    startNavigationProgress();
    orderControllerApi
      .orderControllerPublish(payload)
      .then((payload) => {
        window.open(payload.data.payment_url);
        runInAction(() => {
          this.items.push(payload.data);
        });
        cartManager.clear();
        showNotification({ message: "Order has been sent..." });
        resetNavigationProgress();
      })
      .catch((err) => {
        //@ts-ignore
        console.log(err);
        resetNavigationProgress();
      });
  }
}

export const orderManager = new Manager();
