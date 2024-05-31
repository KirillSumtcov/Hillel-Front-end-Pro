// №1
// let name = prompt("What is your name?");
// if (!name) {
//     alert("Restart and keep your name");
// } else if (Number(name)) {
//     alert("A name cannot consist only of numbers");
// } else {
//     alert(`Hello, ${name}! How are you?`);
// }


// №2
// let numbers = Number(prompt("Write down a three-digit number", 123));
// if ((numbers > 100 && numbers <= 999) || (numbers <= -100 && num >= -999)) {
//     let strNumber = numbers.toString();
//     let num1 = strNumber[0];
//     let num2 = strNumber[1];
//     let num3 = strNumber[2];

//     if (num1 === num2 && num2 === num3) {
//         alert("Have the same numbers.");
//     } else {
//         alert("No, the numbers are the same.");
//     }
//     if (num1 === num2 || num1 === num3 || num2 === num3) {
//         alert("There are numbers that are the same.");
//     } else {
//         alert("None of the numbers are the same");
//     }
// } else {
//     alert("The number is not a three-digit number");
// }


// №3
// let yearOfBirth = +prompt('Enter your year of birth');
// let city = prompt('Indicate which city you live in');
// let favouriteSport = prompt('Specify your favourite sport');
// let currentYear = 2024;
// let kyiv = 'Київ';
// let washington = 'Вашингтон';
// let london = 'Лондон';
// if (city == kyiv) {
//     console.log(`Ти живеш у столиці України`);
// }else if (city == washington) {
//     console.log(`Ти живеш у столиці США`);
// }else if (city == london) {
//     console.log(`Ти живеш у столиці Великоританії`);
// }else{
//     console.log(`Ти живеш у місті ${city}`);
// }
// console.log(currentYear - yearOfBirth);


// №4
// let numOrStr = prompt('input number or string');
// switch (true) {
//     case numOrStr === null:
//         console.log('ви скасували');
//         break;
//     case numOrStr.trim() === '':
//         console.log('Empty String');
//         break;
//     case isNaN(+numOrStr):
//         console.log(' number is Ba_NaN');
//         break;
//     default:
//         console.log('OK!')
//         break;
// }

