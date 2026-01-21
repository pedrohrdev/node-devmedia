import students from "./data/studentsArray.js";
import addStudent from "./functions/addStudent.js";
import calculateAverage from "./functions/calculateClassAverage.js";
import listStudents from "./functions/listStudents.js";
import showApproved from "./functions/showApprovedOrFailed.js";

// Feature 1 - List Students
listStudents(students);
console.log('\n');

// Feature 2 - Add new student;
const newClass = addStudent(students, { name: "Robenson", grade: 5});
console.log(newClass);
console.log('\n');

// Feature 3 - Calculate Class Average;
const average = calculateAverage(students);
console.log(`The class average was: ${average.toFixed(2)}`);
console.log('\n');

// Feature 4
const { approved, failed } = showApproved(students);

console.log("Approved Students:");
console.table(approved);

console.log("Failed Students:");
console.table(failed);
