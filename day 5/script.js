let checkBtn = document.getElementById("checkBtn");
let enterBtn = document.getElementById("enterBtn");
let findDaybtn = document.getElementById("findDay");
let checkNumberBtn = document.getElementById("checkNum");
let processBtn = document.getElementById("processBtn");

// task 1
checkBtn.addEventListener("click", function () {
    let display = document.getElementById("display");
    let age = Number(document.getElementById("ageInput").value);

    if (isNaN(age)) {
        display.innerHTML = "Please enter age";
        display.style.color = "red";
        return;
    }

    if (age < 0) {
        display.innerHTML = "Invalid Age";
        display.style.color = "red";
    }
    else if (age < 18) {
        display.innerHTML = "Minor";
        display.style.color = "orange";
    }
    else if (age <= 60) {
        display.innerHTML = "Adult";
        display.style.color = "green";
    }
    else {
        display.innerHTML = "Senior Citizen";
        display.style.color = "green";
    }
});


// task 2
enterBtn.addEventListener('click', function () {
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passInput").value;
    let display = document.getElementById("displayMessage");

    if (username === "admin" && password === "1234") {
        display.innerHTML = "Access Granted";
        display.style.color = "green";
    } else {
        display.innerHTML = "Access Denied";
        display.style.color = "red";
    }
});


// task 3
findDaybtn.addEventListener('click', function () {
    let num = Number(document.getElementById("numInput").value);
    let display = document.getElementById("displayDay");
    display.style.color = "black";

    switch (num) {
        case 1: display.innerHTML = "Monday"; break;
        case 2: display.innerHTML = "Tuesday"; break;
        case 3: display.innerHTML = "Wednesday"; break;
        case 4: display.innerHTML = "Thursday"; break;
        case 5: display.innerHTML = "Friday"; break;
        case 6: display.innerHTML = "Saturday"; break;
        case 7: display.innerHTML = "Sunday"; break;
        default: {
            display.innerHTML = "Enter Valid Number";
            display.style.color = "red";
        }
    }
});

// task 4
checkNumberBtn.addEventListener('click', function () {
    let num = Number(document.getElementById("numberInput").value);
    let display = document.getElementById("displayNature");

    if (isNaN(num) || document.getElementById("numberInput").value.trim() === "") {
        display.innerHTML = "Please enter a number";
        display.style.color = "red";
        return;
    }

    display.style.color = "black";

    if (num >= 0 && num % 2 === 0) {
        display.innerHTML = "Number is Positive and Even";
    } 
    else if (num >= 0 && num % 2 !== 0) {
        display.innerHTML = "Number is Positive and Odd";
    } 
    else if (num < 0 && num % 2 === 0) {
        display.innerHTML = "Number is Negative and Even";
    } 
    else {
        display.innerHTML = "Number is Negative and Odd";
    }
});

// task 5
processBtn.addEventListener('click', function () {
    let input = document.getElementById("textInput").value;
    let display = document.getElementById("displayMsg");

    if (input.trim() === "") {
        display.innerHTML = "Please enter something";
        display.style.color = "red";
        return;
    }

    display.innerHTML = "Processing...";
    display.style.color = "green";
});
