// 1 - Arrow Functions vs Traditional Functions, Arrow functions
// are shorter and inherit 'this' from their parent scope.

// Traditional function example:
function sum(a, b) {
  return a + b;
}

// Same logic with an arrow function:
const sumArrow = (a, b) => a + b;

// 2 - Arrow Functions in Array Methods

// Traditional way:
const doubledTraditional = numbers.map(function (num) {
  return num * 2;
});

// Modern way:
const doubledArrow = numbers.map(num => num * 2);

console.log(doubledArrow); // [2, 4, 6, 8, 10]