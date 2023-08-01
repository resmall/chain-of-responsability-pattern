import { Order } from "../domain/Order";
import { OrderHandler } from "./order.handler";

function getCouponDiscount(coupon: string) {
  switch (coupon) {
    case "10OFF":
      return 1;
    case "20OFF":
      return 2;
    case "30OFF":
      return 3;
    default:
      return 0;
  }
}

export class CouponHandler extends OrderHandler {
  handle(order: Order) {
    const couponDiscount = getCouponDiscount(order.coupon);
    if (order.coupon && couponDiscount > 0) {
      console.log(
        `- $${couponDiscount} (Coupon discount ${order.coupon} applied)`
      );
      order.applyDiscount(couponDiscount);
    }

    return super.handle(order);
  }
}
