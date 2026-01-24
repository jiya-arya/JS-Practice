let nums = [2, 5, 8, 10, 13, 20, -9];

console.log("-----");
// we have used here forEach method 
// what does foreach do?
// it iterates through each element of the array
// and performs the given function on each element
// similar to for loop but more concise
// here num is the current element being processed in the array 
// nums. mean to iterate through each element of the array 
// and for each element, it executes the function defined in the curly braces {} or uising arrow function syntax
// which checks if the number is even and logs it to the console if true
nums.forEach(num =>{
    if(num % 2 === 0) {
        console.log(num);
    }
})

console.log("-----");
// here we are using map method
// map creates a new array populated with the results of calling a provided function on every element in the calling array
// in simple terms, it transforms each element of the array based on the function we provide
// so in this case, we are creating a new array 'doubled' where each element is double the corresponding element in 'nums'
// here num represents each element in the nums array 
// why num ? 
// it is just a variable name chosen to represent each element in the array during the iteration
// you could name it anything, like x, element, value, etc.
let doubled = nums.map(num => num * 2);
console.log(doubled);

console.log("-----");
// here we are using find method
// find method returns the value of the first element in the provided array that satisfies the provided testing function
// in simple, it searches through the array and returns the first element that meets the condition we specify
// here num represents each element in the nums array during the iteration
// we are checking if the number is greater than 10
// the find method will return the first number that is greater than 10
let firstGreaterThan10 = nums.find(num => num > 10);
console.log(firstGreaterThan10);

console.log("-----");
// if all numbers are positive 
// here we are using every method
// every method tests whether all elements in the array pass the test implemented by the provided function
// it returns a Boolean value: true if all elements pass the test, and false otherwise
// in simple terms, it checks if every element in the array meets the condition we specify
// the every method will return true only if all numbers in the array are positive
let allPositive = nums.every(num => num > 0);
console.log(allPositive);

console.log("-----");
// if any number is odd 
// here we are using some method
// some method tests whether at least one element in the array passes the test implemented by the provided function
// it returns a Boolean value: true if at least one element passes the test, and false otherwise
// in simple terms, it checks if any element in the array meets the condition we specify
// the some method will return true if there is at least one odd number in the array
let anyOdd = nums.some(num => num % 2 !== 0);
console.log(anyOdd);

// difference between some and every
// some checks if at least one element meets the condition
// every checks if all elements meet the condition