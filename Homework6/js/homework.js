// №1
/**
 * 
 * @returns count (number)
 */
// function getSum() {
//     let count = 0;
//     return function (number) {
//         count += number;
//         return count;
//     }

// }

// let counter = getSum();
// console.log(counter(4));
// console.log(counter(6));
// console.log(counter(10));
// console.log(counter(7));






// №2
// function curry(f) {
//     return function (num1) {
//         return function (num2) {
//             return f(num1, num2)
//         }
//     }
// }
/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns The product of two numbers
 */
// function calcSum(num1, num2) {
//     return num1 * num2
// }

// let getSum = curry(calcSum);
// console.log(getSum(5)(2));

// №3
/**
 *
 * @returns number greater than one hundred
 */
// function getNumber() {

//     let maxIteration = 10;
//     let number;

//     for (let i = 1; i < maxIteration; i++) {
//         number = +prompt('Введіть число більше 100:')
//         if (!isNaN(number) && number > 100) {
//             console.log(`Ваше число ${number}`);
//             return
//         } else if (isNaN(number)) {
//             console.log('Ви ввели текст, а не число. Спробуйте ще раз.');
//         }
//         else {
//             let count = maxIteration - i;
//             console.log(`Спробуйте ще раз у вас залишилось ${count} спроб`);
//         }
//     }
//     if (!isNaN(number)) {
//         console.log(`Ваше останнє число ${number}`);
//     } else{
//         console.log(`Потрібно використовувати лише числа`);
//     }

// }

// getNumber();
