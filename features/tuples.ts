/**
 * A tuple is a data type that can't be altered
 * but in this case only we can't change the order
 */
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
// tuples
const pepsi: [string, boolean, number] = ['brown', true, 40];
type Drink = [string, boolean, number];
const cocaCola: Drink = ['brown', true, 50];
