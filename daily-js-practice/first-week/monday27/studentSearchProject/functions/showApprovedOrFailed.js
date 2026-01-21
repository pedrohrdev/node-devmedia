function showApproved(students) {
    const approved = students.filter(student => student.grade >= 6);
    const failed = students.filter(student => student.grade < 6);

    return {
        approved,
        failed
    };
}

export default showApproved;

