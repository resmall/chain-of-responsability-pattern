import { Item } from "./domain/Item";
import { Order } from "./domain/Order";
import { CouponHandler } from "./order-handlers/coupon.handler";
import { FreeDeliveryHandler } from "./order-handlers/free-delivery.handler";
import { HatItemDiscountHandler } from "./order-handlers/hat-item-discount.handler";

function calculateOrderTotal() {
  const couponHandler = new CouponHandler();
  const freeDeliveryHandler = new FreeDeliveryHandler();
  const hatItemDiscount = new HatItemDiscountHandler();
  couponHandler.setNext(freeDeliveryHandler).setNext(hatItemDiscount);

  // applies only $1 discount for hat item
  const order = new Order("123", "pending", "GIMMEDISCOUNT");
  order.addItem(new Item("Hat", 1));
  order.addItem(new Item("Glove", 3));
  order.addItem(new Item("Socks", 2));

  // applies $1 discount for coupon
  const order2 = new Order("123", "pending", "10OFF");
  order2.addItem(new Item("Pants", 5));
  order2.addItem(new Item("Glove", 2));
  order2.addItem(new Item("Socks", 2));

  // applies $1 discount for coupon and $1 discount for hat item and free delivery
  const order3 = new Order("123", "pending", "10OFF");
  order3.addItem(new Item("Hat", 1));
  order3.addItem(new Item("Pants", 5));
  order3.addItem(new Item("Shirt", 5));

  // applies $1 discount for coupon and $1 discount for hat item and doesn't add delivery fee
  const order4 = new Order("123", "pending", "10OFF");
  order4.addItem(new Item("Hat", 1));
  order4.addItem(new Item("Pants", 5));
  order4.addItem(new Item("Shirt", 5));

  const order5 = new Order("123", "pending", "10OFF");
  order5.addItem(new Item("Hat", 1));
  order5.addItem(new Item("Pants", 5));
  order5.addItem(new Item("Shirt", 5));

  const finalOrder: Order = couponHandler.handle(order);
  console.log(`Initial Order total: ${order.total}`);
  console.log(`=== Final Order total: ${finalOrder.total} ===\n`);

  const finalOrder2: Order = couponHandler.handle(order2);
  console.log(`Initial Order total: ${order2.total}`);
  console.log(`=== Final Order total: ${finalOrder2.total} ===\n`);

  console.log(`Initial Order total: ${order3.total}`);
  const finalOrder3: Order = couponHandler.handle(order3);
  console.log(`=== Final Order total: ${finalOrder3.total} ===\n`);

  console.log(`Initial Order total: ${order4.total}`);
  const finalOrder4: Order = couponHandler.handle(order4);
  // will be the same as finalOrder4.total because the order is passed by reference and so, the original
  // order is modified. That's not good. We need to clone the order before passing it to the handler.
  // Thats what we do for order 5.
  console.log(`Initial Order total: ${order4.total}`);
  console.log(`=== Final Order total: ${finalOrder4.total} ===\n`);

  // so lets do another example
  const finalOrder5: Order = couponHandler.handle(Object.create(order5));
  console.log(`Initial Order total: ${order5.total}`);
  console.log(`=== Final Order total: ${finalOrder5.total} ===`);
}

calculateOrderTotal();
