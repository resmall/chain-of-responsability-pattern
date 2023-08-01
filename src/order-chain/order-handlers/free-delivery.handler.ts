import { Order } from "../domain/Order";
import { OrderHandler } from "./order.handler";

function getDeliveryFee() {
  return Math.floor(Math.random() * 10) + 1;
}

export class FreeDeliveryHandler extends OrderHandler {
  handle(order: Order) {
    if (order.total >= 100) {
      console.log("Free delivery applied!");
    } else {
      const deliveryFee = getDeliveryFee();
      order.applyDeliveryFee(deliveryFee);
    }

    return super.handle(order);
  }
}
