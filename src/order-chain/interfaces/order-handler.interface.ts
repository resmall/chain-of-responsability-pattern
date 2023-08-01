import { Order } from "../domain/Order";

export interface IOrderHandler {
  setNext(handler: IOrderHandler): IOrderHandler;
  handle(order: Order): Order;
}
