// 5 - Refactoring Practice
// Before (repetitive and not clear):
function getAdults(users) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      result.push(users[i].name);
    }
  }
  return result;
}

// After (cleaner and declarative):
const getAdultsRefactored = users => users
  .filter(user => user.age >= 18)
  .map(user => user.name);

const usersList = [
  { name: "Pedro", age: 15 },
  { name: "Maria", age: 20 },
  { name: "Lucas", age: 22 },
];

console.log(getAdultsRefactored(usersList)); // ["Maria", "Lucas"]
// The refactored version uses filter + map and arrow functions,
// making the logic more readable and expressive.