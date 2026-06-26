//function declaration
function greet() {
    console.log("Hello Everyone!");
}
greet()

//function Expression
let greet1 = function() {
    console.log("Hello Everyone from function expression!");
}
greet1()

//Arrow function
let greet2 = () => console.log("Hello Everyone from arrow function!");
greet2();

//IIFE = Immediately Invoked Function Expression (Anonymous function)
(function() {
    console.log("Hello Everyone from IIFE!");
})();
