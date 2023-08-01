import { Person } from "../domain/Person";
import { AbstractPersonHandler } from "./handler";

export class CatHandler extends AbstractPersonHandler {
  public handle(person: Person): string {
    if (person.hasCat) {
      return `Let's talk about cats!`;
    }

    return super.handle(person);
  }
}
