import { Order } from "../domain/Order";
import { IOrderHandler } from "../interfaces/order-handler.interface";

export class OrderHandler implements IOrderHandler {
  protected _nextHandler!: IOrderHandler;

  setNext(handler: IOrderHandler) {
    this._nextHandler = handler;
    return handler;
  }

  handle(order: Order) {
    if (this._nextHandler) {
      return this._nextHandler.handle(order);
    }
    return order;
  }
}
