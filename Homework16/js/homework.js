// №1

function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);

}

Student.prototype.getAgeStudent = function () {
    let currentYear = new Date().getFullYear();
    let ageStudent = currentYear - this.birthYear;
    return ageStudent;
}

Student.prototype.getAverageGrades = function () {
    let sum = 0;
    const getSum = (sum, element) => sum + element;

    this.grades.forEach((index) => {
        sum = getSum(sum, index);
    })

    let result = sum / this.grades.length;
    return Math.floor(result);
}

Student.prototype.present = function () {
    let index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = true
    } else {
        console.log('Більше ніж 25 відвідувань записати не можна.');
    }
}

Student.prototype.absent = function () {
    let index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = false
    } else {
        console.log('Більше ніж 25 відвідувань записати не можна.');
    }
}

Student.prototype.summary = function () {
    let averageGrades = this.getAverageGrades();
    let attendanceCount = this.attendance.filter(item => item === true).length;
    let totalCount = this.attendance.filter(item => item !== null).length;
    let averageAttendance = totalCount ? attendanceCount / totalCount : 0;
    averageAttendance = Math.floor(averageAttendance * 100) / 100;


    if (averageGrades > 90 && averageAttendance > 0.9) {
        console.log(`Молодець! Відвідуваня: ${averageAttendance}`);
    } else if (averageGrades > 90 || averageAttendance > 0.9) {
        console.log(`Добре, але можна краще. Відвідуваня: ${averageAttendance}`);
    } else {
        console.log(`Редиска! Відвідуваня: ${averageAttendance}`);
    }
}


const student1 = new Student('Kyrylo', 'Sumtsov', 1999);
const student2 = new Student('Margo', 'Koltsun', 1996);
const student3 = new Student('Denis', 'Taran', 1992);

student1.grades = [80, 80, 99];
student2.grades = [10, 20, 100];
student3.grades = [99, 99, 99];


student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.absent();

student3.present();
student3.present();
student3.present();

console.log(`${student1.name} ${student1.surname}, Вік: ${student1.getAgeStudent()}, Середній бал: ${student1.getAverageGrades()}`);
student1.summary()
console.log(`${student2.name} ${student2.surname}, Вік: ${student2.getAgeStudent()}, Середній бал: ${student2.getAverageGrades()}`);
student2.summary()
console.log(`${student3.name} ${student3.surname}, Вік: ${student3.getAgeStudent()}, Середній бал: ${student3.getAverageGrades()}`);
student3.summary()
