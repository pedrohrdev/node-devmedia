const calculateAverage = (arrayStudents) => {
    const totalSumGrades = arrayStudents.reduce( (acc, student) => {
        return acc + student.grade;
    }, 0)

    let classLength = arrayStudents.length

    let average = totalSumGrades / classLength;

    return average;

}

export default calculateAverage;