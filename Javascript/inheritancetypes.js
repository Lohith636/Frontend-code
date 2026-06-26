//single inheritance
class Animal {
    eat() {
    
    console.log("Animal is eating");
}
}
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}
let dog = new Dog();
dog.eat(); // Output: Animal is eating
dog.bark(); // Output: Dog is barking


//multilevel inheritance
class Aniamal {
    breathe() { 
        console.log("Animal is breathing");
    }
}   
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    } 
}
let dog = new Dog();
dog.breathe();


//hierarchical inheritance
class Animal {
    eat() {
        console.log("Animal is eating");
    }   
}
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}
class Cat extends Animal {
    meow() {
        console.log("Cat is meowing");
    }
}
let dog = new Dog();
dog.eat();
let cat = new Cat();
cat.eat();



//multiple inheritance
class Animal {
    eat() {
        console.log("Animal is eating")
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking")
    }
}

class Cat extends Animal {
    meow() {
        console.log("Cat is meowing")
    } 
}
class Hybrid extends Dog, Cat {
    hybridMethod() {
        console.log("This is a hybrid animal");
    }       
}
 let hybrid = new Hybrid();
 hybrid.eat();  
    hybrid.bark();
    hybrid.meow();
    hybrid.hybridMethod();  