import { Person } from "../domain/Person";
import { AbstractPersonHandler } from "./handler";

export class LastNameHandler extends AbstractPersonHandler {
  public handle(person: Person): string {
    if (person.lastName === "Doe") {
      return `Let's talk about last name! ${person.lastName}`;
    }

    return super.handle(person);
  }
}
