import { Order } from "../domain/Order";
import { OrderHandler } from "./order.handler";

function getDeliveryFee() {
  return 1;
}

export class FreeDeliveryHandler extends OrderHandler {
  handle(order: Order) {
    const deliveryFee = getDeliveryFee();
    if (order.total < 10) {
      console.log(`+ $${deliveryFee} (Delivery fee applied)`);
      order.applyDeliveryFee(deliveryFee);
    } else {
      console.log(`- $0 (Free delivery)`);
    }

    return super.handle(order);
  }
}
