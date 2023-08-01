import { Order } from "../domain/Order";
import { OrderHandler } from "./order.handler";

export class HatItemDiscountHandler extends OrderHandler {
  handle(order: Order) {
    if (order.items.some((item) => item.name === "Hat")) {
      console.log("Hat item discount applied!");
      order.applyDiscount(5);
    }

    return super.handle(order);
  }
}
