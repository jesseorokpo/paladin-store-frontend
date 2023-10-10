import { CartItem } from "@interface/models";
import { showNotification } from "@mantine/notifications";
import { makeObservable, observable, runInAction } from "mobx";
import { Product } from "../sdk/catalog";

class CartManager {
  items: CartItem[];

  constructor() {
    this.items = [];
    makeObservable(this, {
      items: observable,
    });
  }

  addItemQuantity = (item: CartItem, num: number) => {
    console.log(item);

    let changed = { ...item };
    changed.quantity = changed.quantity + num;
    runInAction(() => {
      item.quantity = changed.quantity;
    });
  };

  addItem = (product: Product) => {
    //@ts-ignore
    if (this.items.find((e) => e.product_id == product._id)) {
      showNotification({
        message: `${product.name}  already exists in shopping cart...`,
      });
      return;
    }
    runInAction(() => {
      this.items.push({
        name: product.name ?? "",
        price: product.price ?? 0,
        //@ts-ignore
        product_id: product._id ?? "",
        quantity: 1,
        image: product.image,
      });
      this.items = [...this.items];
    });

    showNotification({
      message: `${product.name} was added to your cart 👍... `,
    });
  };

  removeItem = (item: CartItem) => {
    runInAction(() => {
      let newList = this.items.filter((v) => v.product_id !== item.product_id);
      this.items = [...newList];
    });
  };
  removeItemById = (item: string) => {
    runInAction(() => {
      let newList = this.items.filter((v) => v.product_id !== item);
      this.items = [...newList];
    });
  };

  clear = () => {
    runInAction(() => {
      this.items = [];
    });
  };
}

export const cartManager = new CartManager();
