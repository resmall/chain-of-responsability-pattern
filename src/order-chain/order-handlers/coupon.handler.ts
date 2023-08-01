import { Order } from "../domain/Order";
import { OrderHandler } from "./order.handler";

function getCouponDiscount(coupon: string) {
  switch (coupon) {
    case "10OFF":
      return 10;
    case "20OFF":
      return 20;
    case "30OFF":
      return 30;
    default:
      return 0;
  }
}

export class CouponHandler extends OrderHandler {
  handle(order: Order) {
    const couponDiscount = getCouponDiscount(order.coupon);
    if (order.coupon && couponDiscount > 0) {
      console.log(`Coupon ${order.coupon} applied!`);
      order.applyDiscount(couponDiscount);
    } else {
      console.log(`No coupon applied ${order.coupon} ${couponDiscount > 0}`);
    }

    return super.handle(order);
  }
}
