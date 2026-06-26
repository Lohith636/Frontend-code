//takes another function as an argument(input)---> High order function

function order(callprepare, callServe) {
    console.log("Order food");
    callprepare();
    callServe();
}


//callback functions 
function prepare() {
    console.log("Preparation started");
}

function serveCustomer() {
    console.log("Enjoy your meal");
}
order(prepare, serveCustomer);

function greet(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
 callback(name);
}

processUser("Alice", greet); // output: Hello, Alice

//HOF's

const numbers = [1, 2, 3, 4, 5, 6];


// Step 1: Double each number
const doubled = numbers.map(num => num * 2);


// Step 2: Keep only numbers greater than 5
const filtered = doubled.filter(num => num > 5);


// Step 3: Find the sum of remaining numbers
const total = filtered.reduce((sum, num) => sum + num, 0);


console.log("Doubled:", doubled);   // [2, 4, 6, 8, 10, 12]
console.log("Filtered:", filtered); // [6, 8, 10, 12]
console.log("Total:", total);
