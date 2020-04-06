/**
 * Type annotations is specially used when we daclare a variable
 * on one line and then initialize it later, when we want to have
 * a type that can't be inferred and when a function returns the
 * any type and we need to clarify the value
 */

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 20,
  y: 10,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Functions that return any type
const json = '{ "x": 10, "y": 20 }';
const coordinates = JSON.parse(json); // return any
coordinates.asdasdasdasd; // Typescript don't detect errors
// How to fix it? coordinates: { x: number; y: number}

// Declaration and initialization later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// Variable whose type cannot be inferred correctly
let array = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    numberAboveZero = array[i];
  }
}
