// №1
/**
 * 
 * @returns count (number)
 */
// function showCounter(){
//     let count = 0;
//     function getNumber(number){
//         number = +prompt('Вкажіть будь-яке число')
//         count += number;
//         console.log(count);
//         return count;
//     }
//     return getNumber;

// }

// let counter = showCounter();
// counter()
// counter()
// counter()
// counter()


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

//         if (number > 100) {
//             console.log(`Ваше число ${number}`);
//             return
//         } else {
//             let count = maxIteration - i;
//             console.log(`Спробуйте ще раз у вас залишилось ${count} спроб`);
//         }
//     }
//     console.log(`Ваше останнє число ${number}`);
// }

// getNumber();
