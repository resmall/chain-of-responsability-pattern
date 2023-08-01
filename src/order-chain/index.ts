import { Item } from "./domain/Item";
import { Order } from "./domain/Order";
import { CouponHandler } from "./order-handlers/coupon.handler";
import { FreeDeliveryHandler } from "./order-handlers/free-delivery.handler";
import { HatItemDiscountHandler } from "./order-handlers/hat-item-discount.handler";

function calculateOrderTotal() {
  const couponHandler = new CouponHandler();
  const freeDeliveryHandler = new FreeDeliveryHandler();
  const hatItemDiscount = new HatItemDiscountHandler();

  // applies only $1 discount for hat item
  const order = new Order("123", "pending", "GIMMEDISCOUNT");
  order.addItem(new Item("Hat", 1));
  order.addItem(new Item("Glove", 3));
  order.addItem(new Item("Socks", 2));

  console.log(`Initial Order total: ${order.total}`);
  couponHandler.setNext(freeDeliveryHandler).setNext(hatItemDiscount);
  const finalOrder: Order = couponHandler.handle(order);
  console.log(`=== Final Order total: ${finalOrder.total} ===\n`);
  // Final Order total: 59

  // applies $1 discount for coupon
  const order2 = new Order("123", "pending", "10OFF");
  order2.addItem(new Item("Pants", 5));
  order2.addItem(new Item("Glove", 2));
  order2.addItem(new Item("Socks", 2));

  couponHandler.setNext(freeDeliveryHandler).setNext(hatItemDiscount);
  console.log(`Initial Order total: ${order2.total}`);
  const finalOrder2: Order = couponHandler.handle(order2);
  console.log(`=== Final Order total: ${finalOrder2.total} ===\n`);
  // Final Order total: 57

  // applies $1 discount for coupon and $1 discount for hat item and free delivery
  const order3 = new Order("123", "pending", "10OFF");
  order3.addItem(new Item("Hat", 1));
  order3.addItem(new Item("Pants", 5));
  order3.addItem(new Item("Shirt", 5));

  couponHandler.setNext(freeDeliveryHandler).setNext(hatItemDiscount);
  console.log(`Initial Order total: ${order3.total}`);
  const finalOrder3: Order = couponHandler.handle(order3);
  console.log(`=== Final Order total: ${finalOrder3.total} ===`);
}

calculateOrderTotal();
