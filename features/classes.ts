/**
 * Modifiers
 * - public: can be called anywhere any time
 * - private: can only be called inside the class
 * - protected: can only be called inside the class and childs
 */

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('Orange');
console.log(vehicle.color); // Orange

// Super implementation
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(3, 'Red');
car.startDrivingProcess();
console.log(car.color); // Red
console.log(car.wheels); // 3
