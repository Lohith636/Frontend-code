//premitive
//number
//dynamically typed programing language

let a = 10;
console.log(typeof a, a);

a = "Lohith";
console.log(a);

let b = 3.16
const pi = 3.14
console.log(typeof b, b)

let str = 'dhanush'
console.log(str, typeof str)

console.log("My name is " + str)
console.log("My name is " , str + " aged around " + a + " pi value is " + pi)

//boolean
let isvalid = true
console.log(typeof isvalid, isvalid)

//undefined
let name;
console.log(name)

//null
let value = null;
console.log(typeof value, value);

//bigint
let bigInt = 1234567n;
console.log(typeof bigInt, bigInt);

//symbol
let sym = Symbol("unique");
console.log(typeof sym, sym);

//complex
//array
let arr = [1, 2, 3, 4, 5];
console.log(arr , arr[1]);

//objects
let person = {
    name : "Lohith",
    age : 22,
    city : "Bangalore"
}
console.log(person, person.name)  

//function
function add() {
    c = 3 + 3
    console.log(c)
}
add()