/*

    Daily objective: study arrow function and refactoring, take
    old codes and revert for arrow functions,
    simplify functions and remove repeated code 

    Day project: make password generator

*/

// ========================= Arrow Functions =============================== //

// -> a modern and short way of writing functions;

// traditional function
function sum(num1, num2) {
    return num1 + num2
}


// arrow function
const sumWithaArrowFunction = (num1, num2) => num1 + num2;


// If you only have one parameter, you can remove the parentheses.
const exponentiation = n => n * n;


// If you need multiple lines of code, you typically use {}.
const generateMessage = name => {
    const text = `Hello ${name}`;
    return text.toUpperCase();
}

// ================================ Refactoring ==================================== //

 // "Refactoring" means improving existing code without changing what it does.
//  The idea is to make the code cleaner, more readable, and more efficient.

/* Refactoring can include:

    Using arrow functions

    Replacing loops with array methods

    Simplifying conditions (if → ternary operator)

    Eliminating duplicate code

    Using destructuring, template strings, etc.
*/

function double(n) {
    return n * 2
}

const double2 = n => n * 2;



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //



const array = [6, 7, 67];

function listNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
};

const listNumbers2 = array => array.array.forEach( element => console.log(element) );

listNumbers(array)