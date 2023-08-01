import { Item } from "./Item";

export class Order {
  private _id: string;
  private _amount: number = 0;
  private _status: string;
  private _items: Item[] = [];
  private _coupon: string = "";
  private _discount: number = 0;
  private _total: number = 0;
  private _deliveryFee: number = 0;

  constructor(id: string, status: string = "pending", coupon: string = "") {
    this._id = id;
    this._status = status;
    this._coupon = coupon;
  }

  applyDeliveryFee(fee: number) {
    this._deliveryFee = fee;
    this.calculateTotal();
  }

  public applyDiscount(discount: number): void {
    this._discount += discount;
    this.calculateTotal();
  }

  public get coupon(): string {
    return this._coupon;
  }

  public set coupon(coupon: string) {
    this._coupon = coupon;
  }

  public addItem(item: Item): void {
    this._items.push(item);
    this.calculateTotal();
  }

  private calculateTotal(): void {
    let total = 0;
    this._items.forEach((item) => {
      total += item.price;
    });
    this._total = total + this._deliveryFee - this._discount;
  }

  public get items(): Item[] {
    return this._items;
  }

  public getItems(): Item[] {
    return this._items;
  }

  public get id(): string {
    return this._id;
  }

  public get amount(): number {
    return this._amount;
  }

  public get status(): string {
    return this._status;
  }

  public set status(status: string) {
    this._status = status;
  }

  public get total(): number {
    return this._total;
  }
}
