// №1

// let company = {
//     sales: [{
//         name: 'John',
//         salary: 1000
//     }, {
//         name: 'Alice',
//         salary: 600
//     }],
//     development: {
//         web: [{
//             name: 'Peter',
//             salary: 2000
//         }, {
//             name: 'Alex',
//             salary: 1800
//         }],
//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// }


// function sumSalary(value) {
//     if (Array.isArray(value)) { // Перевіряє чи є массивом 
//         return value.reduce((init, current) => init + current.salary, 0)    // повертає суму salary 
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(value)) { //проходимось по значенням, якщо є массив записуєм результат 
//             sum += sumSalary(subdep)
//         }
//         return sum;
//     }
// }
// console.log(sumSalary(company));