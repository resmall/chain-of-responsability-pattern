import { Person } from "../domain/Person";

export interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: Person): string;
}
