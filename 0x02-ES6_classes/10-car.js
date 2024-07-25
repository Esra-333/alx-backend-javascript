export default class Car {
  constructor(brand, motor, color) {
    this.brand = bran;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    this._color = value;
  }

   static get [Symbol.species]() {
      return this;
   }

   cloneCar() {
     const Species = this.constructor[Symbol.species];

     return new Species();
   }
}
