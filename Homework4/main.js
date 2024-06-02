// №1
// for (let i = 20; i <= 30; i = i + 0.5) {
//     console.log(i);
// }

// №2
// let usd = 26;
// for (let i = 10; i <= 100; i = i + 10) {
//     let result = i * usd;
//     console.log(result);
// }

// №3
// let integer = Number(prompt('Ведіть ціле число'));

// switch (true) {
//     case integer === 0:
//         console.log('Ви скасували');
//         break;
//     case isNaN(integer):
//         console.log('Не число');
//         break;
//     case Number.isInteger(integer):
//         for (let i = 1; i <= 100; i++) {
//             let result = Math.pow(i, 2);
//             if (result <= integer) {
//                 console.log(result);
//             }
//         }
//         break;
//     default:
//         console.log('Не ціле число, спробуйте ще раз');
//         break;
// }

// №4
// let integer = Number(prompt('Ведіть ціле число'));

// switch (true) {
//     case integer === 0:
//         console.log('Ви скасували');
//         break;
//     case isNaN(integer):
//         console.log('Не число');
//         break;
//     case integer < 2:
//         console.log('Число мусить буте більше 1');
//         break;
//     case Number.isInteger(integer):
//         function isPrime(number) {
//             if (number < 2) {
//                 return false;
//             }
//             for (let i = 2; i <= Math.sqrt(number); i++) {
//                 if (number % i === 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//         if (isPrime(integer)) {
//             console.log(`${integer} - Просте число`);
//         } else {
//             console.log(`${integer} - Непросте число`);
//         }
//         break;
//     default:
//         console.log('Не ціле, спробуйте ще раз');
//         break;
// }


