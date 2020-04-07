/**
 * TS can do type inference when extracting values
 * from array.
 */

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values marking error
carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
