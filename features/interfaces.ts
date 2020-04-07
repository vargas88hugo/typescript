/**
 * We can have generic interfaces that has a
 * little part of the object
 */
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
