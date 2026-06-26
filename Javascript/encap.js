class Bankbalance {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    }   
}

let myAccount = new Bankbalance(1000);
console.log(myAccount.getBalance());    
myAccount.deposit(500); 



// Types of Polymorphism in JavaScript
// Method Overriding (Runtime Polymorphism) ✅
// Method Overloading (Not directly supported in JavaScript)


class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}


class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}


class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}


const dog = new Dog();
const cat = new Cat();


dog.makeSound();
cat.makeSound();







