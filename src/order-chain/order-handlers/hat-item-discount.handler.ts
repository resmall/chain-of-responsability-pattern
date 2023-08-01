import { Order } from "../domain/Order";
import { OrderHandler } from "./order.handler";

export class HatItemDiscountHandler extends OrderHandler {
  handle(order: Order) {
    if (order.getItems().some((item) => item.name === "Hat")) {
      console.log(`- $1 (Hat item discount applied)`);
      order.applyDiscount(1);
    }

    return super.handle(order);
  }
}
