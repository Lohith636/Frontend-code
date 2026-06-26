//Array
let student = [102, "Dhanu", 8.9, true];
console.log(student);

//Array Constructor
let arr = new Array(102, "Dhanu", 8.9, true);
console.log(arr);

//Add Elements
arr.push(5); // Added to end of an array
arr.unshift(1); // Added to start of an array
console.log(arr);

//Remove Elements
arr.pop(); // Removed from end of an array
arr.shift(); // Removed from start of an array
console.log(arr);

//Splice & Slice
let nums = [1, 2, 3, 4, 5];
nums.splice(2, 1); // Starting from index 2, remove 1 element
console.log(nums);

let slicedNums = nums.slice(1, 4); // Extract elements from index 1 to 3
console.log(slicedNums);

let fruits = ["Apple", "Banana", "Cherry"];
  console.log(fruits.indexOf("Banana")); // Output: 1
  console.log(fruits.includes("Mango")); // Output: false
  console.log(fruits.sort());
  console.log(fruits.reverse());

  let fruits = ["Apple", "Banana", "Cherry"];
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });

  numbers = [1, 2, 3, 4, 5];
  let squaredNumbers = numbers.map(function(num) {
    return num * num;
  });
  console.log(squaredNumbers);    

    let newarr = [1, 2, 3, 4, 5];
    let evenNumbers = newarr.filter(function(num) {
      return num % 2 === 0;
    }); 

    console.log(evenNumbers);

    let sum = numbers.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);  
    console.log(sum); 

    let nums1 = [1, 2, 3];
    let nums2 = [4, 5, 6];
    let combined = nums1.concat(nums2);
    console.log(combined);  

    let words = ["Hello", "World"];
    let sentence = words.join(" ");
    console.log(sentence);  

    //unpocketing
    let fruits = ["Apple", "Banana", "Cherry"];
    let [a, b, c] = fruits;
    console.log(a);