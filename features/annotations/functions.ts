const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

const logger = (message: string) => {
  console.log(message);
  return null;
  return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring an object in the argument function
const forecast = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
