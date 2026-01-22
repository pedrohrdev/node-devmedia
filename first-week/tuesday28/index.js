/*
    Daily objective: 
        1 - Learn Destructuring;

            1.1 - Create examples of destructuring;
        
        2 - Learn spred/rest operators;

            2.1 - Create a function that adds any number of arguments (rest);;

*/


// =================================== DESTRUCTURING in Arrays ==============================================



const nums = [10, 20, 30]



const [a = 5, b = 5, c = 5] = nums; // <-- It is possible to pass default values ​​if there is no value;



// console.log(a, b, c) <-This will return 10, 20, 30;



const [x, , z] = nums; // <-- It is possible to skip a value if you do not want to assign it to a variable.

// console.log(x, z)



// ========================================================================================================== //





// =================================== DESTRUCTURING in Objects ============================================= //

const person = {
    name: "Pedro",
    age: 15,
    city: "NewYork",
};

const { name, age } = person;

//console.log(name, age);

const { city: local} = person;

//console.log(local);

// ========================================================================================================== //



// =================================== REST OPERATOR ============================================= //

/*

    Rest operator -> we use it when we want to get the rest of an object;

    Supondo que queromos pegar tudo que nao for o objeto adress,
    usamos o rest para falar que queremos o adress, e resto va para
    outra variavel no caso a varialvel userWithoutAddress

*/

const user = [

    {
        name: "Pedro Rossi",
        age: 15,
        email: "pedrohrdev@gmail.com",

        adress: {
            
            street: "123 Main st",
            city: "Chique Chique",
            state: "Piauí",
        
        }

    }
];


const usingRest = user.map( ({adress, ...userWithoutAddress}) => {
    return userWithoutAddress
} );

// console.log(usingRest)

// ========================================================================================================== //


// ===================================== SPREAD OPERATOR ======================================================= //

/*
    To make each element of the array be used individually by the function,
    we use the spread, if we don't use the spread the code only understands
    that the array is a parameter, with the "..." the code understands that
    it is to make each element be used
*/

function sum(a, b, c) {
    return a + b + c;
};

const nums2 = [1, 2, 3];

//console.log(sum(...nums2))

/* */
const firstObj = { a: 1, b: 2 };
const secondObj = {c: 3};

const newObj = {firstObj, secondObj}; // This way we would create a new object with both objects inside.

// Using the spread ' ... ', we spread the elements and combine the two
// inside again, thus creating a single object with the two previous ones
const newObjSpread = {...firstObj, ...secondObj} 

//console.log(newObjSpread);

// ========================================================================================================== //




// ========================= Create a function that adds any number of arguments (rest); ===================== //;

const nums3 = [
    {
        numberRest1: 1,
        numberRest2: 2,
        numberRest3: 3,

        numbersOfSum: {
            n1: 5,
            n2: 10,
            n3: 15
        }

    }

]

const SumofAnyArgumentNumber = (...numbersToAdd) => {

    return numbersToAdd.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const results = nums3.map(item => {

    const restNumbers = [item.numberRest1, item.numberRest2, item.numberRest3];

    const sumNumbers = Object.values(item.numbersOfSum);

    const allNumbers = [...restNumbers, ...sumNumbers];

    const totalSum = SumofAnyArgumentNumber(...allNumbers);

    return {
        allNumbers,
        totalSum,
        originalItem: item
    };
});

console.log(results);