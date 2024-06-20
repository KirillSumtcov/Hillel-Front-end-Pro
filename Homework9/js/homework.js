// №1
// let user = {
//     name: 'Кирило',
//     age: 25,
//     city: 'Dnipro',
//     showInfo() {
//         return `Мене звати ${this.name}. Мені ${this.age} років. Я проживаю в місті ${this.city}.`
//     }
// }

// console.log(user.showInfo());

// №2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumber = arr.filter(num => num % 2 === 0)

// console.log(evenNumber);

// №3
// const contactPhone = {
//     contacts: [
//         {
//             name: "Кирило",
//             phoneNumber: "0666338899",
//             email: "kyrylo@gmail.com"
//         },
//         {
//             name: "Маргарита",
//             phoneNumber: "0550555666",
//             email: "margarita@gmail.com"
//         }
//     ],

//     findName: function(name) {
//         return this.contacts.find(contact => contact.name === name);
//     },

//     addContact: function(name, phoneNumber, email) {
//         this.contacts.push({
//             name: name,
//             phoneNumber: phoneNumber,
//             email: email
//         });
//     }
// };

// console.log(contactPhone.findName("Кирило"));
// contactPhone.addContact("Максим", "0999555666", "maks@gmail.com");
// console.log(contactPhone.contacts);