let nums = [2, 5, 8, 10, 13, 20, -9];

for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
        console.log(nums[i]);
    }
}

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
console.log(nums);
for(let i = 0; i < nums.length; i++) {
    let num2 = nums[i] * 2;
    console.log(num2);
}

console.log("-----");
let greaterThan10 = nums[1]
for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 10) {
        console.log(nums[i]);
        break;
    }   
}

console.log("-----");
// if all numbers are positive 
let allPositive = true;
for(let i = 0; i < nums.length; i++) {
    if(nums[i] < 0) {
        allPositive = false;
        break;
    }
}
console.log(allPositive);

console.log("-----");
// if any number is odd 
let anyOdd = false;
for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 !== 0) {
        anyOdd = true;
        break;
    }
}
console.log(anyOdd);