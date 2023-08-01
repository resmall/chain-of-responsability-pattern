export class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _hasCat: boolean;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    hasCat: boolean = false
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._hasCat = hasCat;
  }

  public get hasCat(): boolean {
    return this._hasCat;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get age(): number {
    return this._age;
  }

  public set firstName(name: string) {
    this._firstName = name;
  }

  public set age(age: number) {
    this._age = age;
  }
}
