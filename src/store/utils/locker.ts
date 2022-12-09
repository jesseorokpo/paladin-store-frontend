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

//   deleteItem(id: string) {
//     console.log("deleting item");
//     productApiController.productControllerDeleteItem(id).then((payload) => {
//       runInAction(() => {
//         // @ts-ignore
//         this.items = this.items.filter((element) => element._id != id);
//         this.loadItems();
//       });
//     });
//   }

  updateItem(id: string, payload: UpdateLockerDto) {
    lockerApiController.lockerControllerUpdate(id, payload).then((payload) => {
      runInAction(() => {
        // @ts-ignore
        const index = this.items.findIndex((element) => element._id == id);
        this.items[index] = { ...payload, ...this.items[index] };
      });
    });
  }

  publishItem(payload: PublishLockerDto) {
    lockerApiController
      .lockerControllerPublish(payload)
      .then((payload) => {
        runInAction(() => {
          this.items.push(payload.data);
        });
      })
      .catch((err) => {
        //@ts-ignore
        console.log(err.response);
      });
  }
}

export const lockerManager = new Manager();
