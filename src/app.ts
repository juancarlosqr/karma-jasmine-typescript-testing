class Person {
  name: string;
  constructor() { }
  setName (name: string) {
    this.name = name;
  }
  /**
    * My custom comment for method 'getName'
    * @returns Name of the Person object
    */
  getName () {
    return this.name;
  }
}