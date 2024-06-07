//№1
// let userString = prompt('Напишіть будь-який текст');
// let userLetters = prompt('Вкажіть символи які необхідно видаляти з рядка');


// function deletesCharacters(userString, userLetters) {
//     let resultString = '';
//     for (let letters of userString) {
//         if (!userLetters.includes(letters)) {
//             resultString += letters;
//         }
//     }
//     console.log(resultString);
//     return resultString
// }

// deletesCharacters(userString, userLetters);

//№2
// function arithmeticMean(array) {
//     let numbers = array.filter(elem => typeof elem === 'number' && !isNaN(elem));
//     let result = numbers.reduce((acc, value) => (acc + value) / numbers.length, 0);
//     console.log(result);
//     return result
// }

// let arr = [100, 20, 'str', Symbol('id'), undefined, null, true, 30]
// arithmeticMean(arr);

//№3
// function removeElement(array, item) {
//     let result = array.filter(elem => elem !== item);
//     console.log(result);
//     return result;
    
// }

// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array, 4)