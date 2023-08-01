import { Person } from "../domain/Person";
import { AbstractPersonHandler } from "./handler";

export class AgeHandler extends AbstractPersonHandler {
  public handle(person: Person): string {
    if (person.age > 50) {
      return `Let's talk about age! ${person.age}`;
    }

    return super.handle(person);
  }
}
