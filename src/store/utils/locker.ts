import {
  resetNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { makeAutoObservable, runInAction } from "mobx";
import { lockerApiController } from "../../config/sdk";
import { Locker, PublishLockerDto, UpdateLockerDto } from "../../sdk/catalog";

class Manager {
  items: Locker[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  load() {
    lockerApiController
      .lockerControllerGet()
      .then(async (res) => {
        let data = res.data;
        console.log(data);
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

  async publishItem(payload: PublishLockerDto) {
    startNavigationProgress();

    try {
      let response = await lockerApiController.lockerControllerPublish(payload);
      runInAction(() => {
        this.items.push(response.data);

        resetNavigationProgress();
      });
    } catch (err) {
      resetNavigationProgress();
      //@ts-ignore
      console.log(err.response);
    }
  }
}

export const lockerManager = new Manager();
