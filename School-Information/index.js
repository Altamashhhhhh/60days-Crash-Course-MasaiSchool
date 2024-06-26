
const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        {
            name: "Alice",
            className: "Grade 5",
            scores: { math: 95, science: 88, history: 85, english: 92 },
        },
        {
            name: "Bob",
            className: "Grade 4",
            scores: { math: 80, science: 78, history: 92, english: 85 },
        },
        {
            name: "Charlie",
            className: "Grade 5",
            scores: { math: 88, science: 90, history: 78, english: 88 },
        },
        {
            name: "Diana",
            className: "Grade 4",
            scores: { math: 92, science: 85, history: 88, english: 90 },
        },
    ],
};



function countCalculation(obj) {
    let { departments } = obj;
    let { math, history } = departments;
    let { teachers: mathTeachersCount, students: mathStudentsCount } = math;
    let { teachers: historyTeachersCount, students: historyStudentsCount } = history;


    return {
        mathTeachersCount,
        historyTeachersCount,
        mathStudentsCount,
        historyStudentsCount,
    }
}
console.log(countCalculation(school));


//ABOVE CODE WAS FOR COUNTCALCULATION TO FIND THE NUMBER OF TEACHER FOR EACH SUBJECT 




function findTopStudent(obj, sub) {
    let { students } = obj;
    return students.reduce((prev, curr) => {
        return curr.scores[sub] > prev.scores[sub] ? curr : prev;
    });
}
console.log(findTopStudent(school, "science"));



///////////////BELOW CODE FOR ADDNEWDEPARTMENT FUNCTION

function addNewDept(object) {
    let newDept = { ...object };
    newDept.departments["art"] = { teachers: 2, students: 50 };
    return newDept;
}

console.log(addNewDept(school));

///////////////////BELOW CODE IS TO FIND THE DEPARTMENT WITH HIGHEST NUMBER OF STUDENTS


function highestStudentCountDepartment(obj) {
    let highest = 0;
    let dept = {};
    let { departments } = obj;
    for (let i in departments) {
        if (departments[i].students > highest) {
            highest = departments[i].students;
            dept = i

        }
    }
    return `Highest Count Dept is :  ${dept} with  ${highest} students`;
}

console.log(highestStudentCountDepartment(school));