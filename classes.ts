class Vehicle {
  constructor(public color: string) {}

  drive(): void {
    console.log('부릉부릉');
  }

  honk(): void {
    console.log('삡');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }
  drive(): void {
    console.log('차 부릉부릉');
  }
}

const car = new Car('red', 4);
car.drive();
car.honk();

export {};
