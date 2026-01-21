/*
    Daily goal: study find, some evert and combination of methods;

    Mini exercises: find the student with a grade higher than 9,
    did anyone fail? Did everyone pass?
    
    Project: Make a, Student Search Project
*/

const students = [
    {
        name: "Pedro",
        age: 22,
        grade: 6.5,
    },

    {
        name: "Raphael",
        age: 18,
        grade: 8.2,
    },
    
    {
        name: "Cayo",
        age: 64,
        grade: 4.5,
    },

    {
        name: "Davi",
        age: 36,
        grade: 9.5,
    },    
];

// Testing the methods I learned today,

// Finding a student with a grade higher than 9;
const studentWithHighGrade = students.filter( (student) => {
    return student.grade > 9;
} ); 

//console.log(studentWithHighGrade)

// Is there anyone who failed

const isThereAnyoneWhoFailed = students.some( (student) => {
    return student.grade < 6;
} )

//console.log(isThereAnyoneWhoFailed);

// Did everyone pass?
const everyonePass = students.every( (student) => {
    return student.grade > 6;
}) 

//console.log(everyonePass);