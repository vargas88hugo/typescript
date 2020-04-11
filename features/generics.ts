/**
 * Example of generics with classes
 */

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// The best approach with generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Is not necessary the generic because typescript uses inferred annotation
new ArrayOfAnything<string>(['aa', 'bb', 'cc']);

/**
 * Example of generics with functions
 */

function printStrings(arr: string[]): void {
  for (const i of arr) {
    console.log(i);
  }
}

function printNumbers(arr: number[]): void {
  for (const i of arr) {
    console.log(i);
  }
}

function printAnything<T>(arr: T[]): void {
  for (const i of arr) {
    console.log(i);
  }
}

// Is not necessary the generic because typescript uses inferred annotation
printAnything<string>(['aa', 'bb', 'cc']);

/**
 * Generic constrains
 */

class Vehicle {
  print() {
    console.log('I am a vehicle');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrVehicles<T extends Printable>(arr: T[]): void {
  for (const i of arr) {
    i.print();
  }
}

printHousesOrVehicles([new House(), new House()]);
printHousesOrVehicles([new Vehicle(), new Vehicle()]);
printHousesOrVehicles([new House(), new Vehicle()]);
