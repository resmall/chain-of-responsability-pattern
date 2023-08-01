import { Person } from "../domain/Person";
import { Handler } from "../interfaces/handler.interface";

export abstract class AbstractPersonHandler implements Handler {
  private nextHandler!: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(person: Person): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(person);
    }

    return "null";
  }
}
