// №1
let name = "Kyrylo";
let age = 25;
let boolean = true;
let bigNumber = 12345678901234567890n;
let symbol = Symbol('foo');
let empty = null;
let identifier;
const user = {
  name,
  age,
}
console.log(typeof name);
console.log(typeof age);
console.log(typeof boolean);
console.log(typeof bigNumber);
console.log(typeof symbol);
console.log(typeof empty);
console.log(typeof identifier);
console.log(typeof user);

// №2
let names = prompt('What is your name?');
let year = prompt('How old are you?');
let city = prompt('Where are you from?');
if (!names){
  names = 'Not specified'
}
if(!year){
  year = 'Not specified'
}
if(!city){
  city = 'Not specified'
}
alert(`My name is ${names} \nI am ${year} \nI am from ${city}`)

// №3
let numbers = prompt('Enter a five-digit number');
let strNumbers = numbers.toString();
let arrNumbers = strNumbers.split('');
let newNumbers = arrNumbers.join(' ');
console.log(newNumbers);
alert(newNumbers)
