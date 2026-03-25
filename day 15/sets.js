//set concept

//set is a collection of unique values
//set is iterable
//set is a data structure that can store unique values of any type
// set has no index, so we cannot access values by index
// set is not ordered, so the order of values is not guaranteed
// set only tells us whether a value is present or not, it does not store the position of the value

//creating a set
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); //duplicate value, will not be added
console.log(mySet); 

// set(3) in output Means 
// The number 3 indicates the size of the set, i.e., it contains 3 unique values.

// methods 
// has() method to check if a value exists in the set
console.log(mySet.has(2)); // true
console.log(mySet.has(4)); // false 
// delete() method to remove a value from the set
mySet.delete(2);
console.log(mySet); // Set(2) { 1, 3 }
// clear() method to remove all values from the set
mySet.clear();
console.log(mySet); // Set(0) {}
// size property to get the number of unique values in the set
mySet.add(1);
mySet.add(2);
console.log(mySet.size); // 2
console.log("-----------")
//iterating over a set
for (let value of mySet) {
    console.log(value);
}

// syntax explained of interation using for of loop
// for (let variable of iterable) {
//     // code to be executed
// }

//iterating over a set using forEach() method
mySet.forEach(value => {
    console.log(value);
}
);

// creating a set from an array
let myArray = [1, 2, 3, 4, 5, 5, 6];
let mySetFromArray = new Set(myArray);
console.log(mySetFromArray); // Set(6) { 1, 2, 3, 4, 5, 6 }
