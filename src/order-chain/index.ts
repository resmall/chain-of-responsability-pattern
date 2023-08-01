import { Item } from "./domain/Item";
import { Order } from "./domain/Order";
import { CouponHandler } from "./order-handlers/coupon.handler";
import { FreeDeliveryHandler } from "./order-handlers/free-delivery.handler";
import { HatItemDiscountHandler } from "./order-handlers/hat-item-discount.handler";

function calculateOrderTotal() {
  const couponHandler = new CouponHandler();
  const freeDeliveryHandler = new FreeDeliveryHandler();
  const hatItemDiscount = new HatItemDiscountHandler();

  const order = new Order("123", "pending", "GIMMEDISCOUNT");
  order.addItem(new Item("Hat", 10));
  order.addItem(new Item("Glove", 30));
  order.addItem(new Item("Socks", 20));

  console.log(`Initial Order total: ${order.total}`);
  couponHandler.setNext(freeDeliveryHandler).setNext(hatItemDiscount);
  const finalOrder: Order = couponHandler.handle(order);
  console.log(`=== Final Order total: ${finalOrder.total} ===\n`);
  // Final Order total: 59

  const order2 = new Order("123", "pending", "10OFF");
  order2.addItem(new Item("Hat", 50));
  order2.addItem(new Item("Glove", 20));
  order2.addItem(new Item("Socks", 40));

  couponHandler.setNext(freeDeliveryHandler).setNext(hatItemDiscount);
  const finalOrder2: Order = couponHandler.handle(order2);
  console.log(`=== Final Order total: ${finalOrder2.total} ===\n`);
  // Final Order total: 57

  const order3 = new Order("123", "pending", "10OFF");
  order3.addItem(new Item("Hat", 100));
  order3.addItem(new Item("Glove", 100));
  order3.addItem(new Item("Socks", 50));

  couponHandler.setNext(freeDeliveryHandler).setNext(hatItemDiscount);
  const finalOrder3: Order = couponHandler.handle(order3);
  console.log(`=== Final Order total: ${finalOrder3.total} ===`);
}

calculateOrderTotal();
