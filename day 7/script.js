
function greet() {
    let name = document.getElementById("nameInput").value;
    let display = document.getElementById("greetMsg");

    if (name === "") {
        name = "Guest";
        display.textContent = "Hello,  " + name + "!";
    }
    else {
        display.textContent = "Hello, " + name + "!";

    }
}
function greetUser(name) {
    if (name === "" || name === undefined) {
        console.log("Hello, Guest");
    } else {
        console.log("Hello, " + name);
    }
}

greetUser("Universe");
greetUser("");
greetUser();

function square(num) {
    return num * num
}
let result = square(3);
console.log(result);

function checkNumberType(num) {
    let n = num;
    if (n > 0) { console.log("Positive"); }
    else if (n == 0) { console.log("Zero"); }
    else { console.log("negative"); }

}

checkNumberType(-1);
checkNumberType(0);
checkNumberType(4);

if (isEven(7)) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

function isEven(num) {
    return num % 2 === 0;
}

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

let largest = findLargest(1, 5, 9);
console.log(largest);


function countCharacters(str) {

    return str.length;

}

console.log("Total characters: " + countCharacters("jiya"));

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

numbers.push(60);
numbers.pop();
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of array elements: " + sum);

let largestNum = numbers[0]; // assume first element is largest

for (let i = 1; i < numbers.length; i++) { // start from second element
    if (numbers[i] > largestNum) {
        largestNum = numbers[i]; // update largest if current is bigger
    }
}

console.log("Largest number: " + largestNum);


function checkTemperature(temp) {
    if (temp < 0) {
        console.log("Freezing");
    } else if (temp >= 0 && temp <= 20) {
        console.log("Cold");
    } else if (temp >= 21 && temp <= 35) {
        console.log("Warm");
    } else {
        console.log("Hot");
    }
}
checkTemperature(-5);
checkTemperature(15);
checkTemperature(30);
checkTemperature(40);


function calculateGrade(marks) {

    if (marks >= 90) {
        console.log("A");
    } else if (marks >= 75) {
        console.log("B");
    } else if (marks >= 50) {
        console.log("C");
    } else {
        console.log("Fail");
    }
}

calculateGrade(95);
calculateGrade(80);
calculateGrade(60);
calculateGrade(40);

// Rules:

// type can be "deposit" or "withdraw"

// If "deposit" → return new balance after adding amount

// If "withdraw" →

// If transactionAmount > balance → print "Insufficient funds"

// Else → return new balance after subtraction

function bankTransaction(balance, transactionAmount, type){
    if(type === "deposit"){
        return balance + transactionAmount;
    }
    else if(type === "withdraw"){
        if(transactionAmount > balance){
            console.log("Insufficient funds");
            return balance;
        }
        else{
            return balance - transactionAmount;
        }
    }
    else{
        console.log("Invalid transaction type");
        return balance;
    }
}

let currentBalance = 1000;
currentBalance = bankTransaction(currentBalance, 500, "deposit");
console.log("Balance after deposit: " + currentBalance);    
currentBalance = bankTransaction(currentBalance, 300, "withdraw");
console.log("Balance after withdrawal: " + currentBalance);
currentBalance = bankTransaction(currentBalance, 1500, "withdraw"); 
console.log("Balance after attempted withdrawal: " + currentBalance);
currentBalance = bankTransaction(currentBalance, 200, "transfer");
console.log("Balance after invalid transaction: " + currentBalance);
