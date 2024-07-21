//------------------------------------------------------- №1
class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            console.log('Division by zero is not allowed.');
        }
        return num1 / num2;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2));


//------------------------------------------------------- №2
class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();
coach2.displayInfo();


//------------------------------------------------------- №3

class BankAccount {
    constructor(account) {
        this.account = account;
    }

    getBalance() {
        return this.account;
    }

    deposit(number) {
        if (number > 0) {
            this.account += number;
        } else {
            console.log('The number must be greater than 0.');
        }
    }

    withdraw(number) {
        if (number > 0 && number <= this.account) {
            this.account -= number;
        } else if (number > this.account) {
            console.log('There are not enough funds in your account.');
        } else {
            console.log('The number must be greater than 0.');
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());