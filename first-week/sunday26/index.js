/*
    Daily Objective: 1 - Review map, filter, and reduce;

    2 - Describe simple examples with each one;

    and practice filtering expensive products from an array, using map to format names, and reduce to add values
*/ 

const nums = [1, 2, 3, 4];;

// Map
const doubledNums = nums.map(num => num * 2);

console.log(doubledNums)

// Filter
const evenNums = nums.filter(num => num % 2 === 0);

console.log(evenNums)

// Reduce
const totalSumNums = nums.reduce((acc, num) => {
    return acc + num
}, 0)

console.log(totalSumNums);

/*
    Ok, now I'll explain what each one is according to what I learned,

    1 - map() will return an array with the same amount according to
    a callback function applied to each element of the original array;

    2 - Now the filter() will filter items from an array based on whether
    the condition is met.

    3 - And finally reduce(), it will take an array with several elements
    and reduce it to just one value; 
*/



// filtering expensive products from an array
const prices = [1.50, 1.23, 1.89, 5.50];

const expensiveProducts = prices.filter((expensivePrice) => {
    if (expensivePrice > 2.00) {
        return  expensivePrice
    }
})

console.log(expensiveProducts);

// using map to format names
const names = ["joao da silva", "maria de souza", "pedro alves"];

const formatingFirstLetterToUpperCase = names.map(name => {
    return name[0].toUpperCase() + name.slice(1); // I also learned the slice method, which takes part of a string or an array.
})

console.log(formatingFirstLetterToUpperCase)


// using reduce to get a student's average
const grades = [6.5, 8.2, 7.9];

const total = grades.reduce( (acc, grade) => {
    return acc + grade;
}, 0 )

const average = total / grades.length;

console.log(`Average: ${average.toFixed(2)}`);