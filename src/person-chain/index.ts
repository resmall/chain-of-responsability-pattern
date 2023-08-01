import { AgeHandler } from "./person-handlers/age.handler";
import { LastNameHandler } from "./person-handlers/last-name.handler";
import { CatHandler } from "./person-handlers/cat.handler";
import { Person } from "./domain/Person";

/**
 * In the usage example, we create instances of the concrete handlers and chain
 * them together using the `setNext` method.
 * When a request is made to the first handler in the chain, it will either
 * handle the request or pass it on to the next handler in the chain until
 * the request is handled or there are no more handlers in the chain.
 */
const handler1 = new CatHandler();
const handler2 = new LastNameHandler();
const handler3 = new AgeHandler();
handler1.setNext(handler2).setNext(handler3);

const person = new Person("John", "Doe", 30);
const person2 = new Person("John", "Door", 51);
const person3 = new Person("John", "Dawg", 30, true);

console.log(`
  First call....: ${handler1.handle(person)}
  Second call...: ${handler1.handle(person2)}
  Third call....: ${handler1.handle(person3)}
`);
