// 3 - Destructuring Assignment
// Destructuring allows us to extract data from arrays or objects easily.

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

console.log(firstColor);  // "red"
console.log(secondColor); // "green"

// Example with objects:
const person = {
  name: "Pedro",
  age: 15,
  country: "Brazil"
};

// Without destructuring:
const name1 = person.name;
const age1 = person.age;

// With destructuring:
const { name, age } = person;

console.log(name); // "Pedro"
console.log(age);  // 15
// Code is shorter, cleaner, and more modern.