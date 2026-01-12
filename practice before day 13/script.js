let itemsArray = [];
let addButton = document.getElementById("addItem");


// task 3
addButton.addEventListener("click", function () {

    let input = document.getElementById("input-text").value;
    // let display = document.getElementById("itemList");

    if (input.trim() === "") {
        alert("Enter Something");
        return;
    }

    itemsArray.push(input);
    document.getElementById("input-text").value = "";
    renderList();

});

function renderList() {
    let display = document.getElementById("itemList");
    display.innerHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
        display.innerHTML += `<li> ${itemsArray[i]} </li> ` + "<br>";
    }
}

// task 
let CountClickRed = 0;
let CountClickGreen = 0;
let CountClickBlue = 0;

let ChangeBtns = document.querySelectorAll(".changeColor"); // all buttons

ChangeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let color = btn.textContent.toLowerCase(); // get "red"/"green"/"blue" from button text

        // Change background (optional here if you want)
        document.body.style.backgroundColor = color;

        // Count clicks
        switch (color) {
            case "red":
                CountClickRed++;
                if (CountClickRed > 1) alert("You Clicked Red");
                break;
            case "green":
                CountClickGreen++;
                if (CountClickGreen > 1) alert("You Clicked Green");
                break;
            case "blue":
                CountClickBlue++;
                if (CountClickBlue > 1) alert("You Clicked Blue");
                break;
        }
    });
});


let inputField = document.getElementById("textInput");
let countDisplay = document.getElementById("charCount");
inputField.addEventListener("input", function () {
    let length = inputField.value.length;
    countDisplay.innerText = "Characters: " + length;
});


let passwordField = document.getElementById("passwordInput");
let toggleButton = document.getElementById("toggleBtn");

toggleButton.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.innerText = "Hide";
    } else {
        passwordField.type = "password";
        toggleButton.innerText = "Show";
    }
});

let mainButton = document.getElementById("mainBtn");
let toggleButton2 = document.getElementById("toggleBtn2");

toggleButton2.addEventListener("click", function () {
    if (mainButton.disabled === false) {
        mainButton.disabled = true;
        toggleButton2.innerText = "Enable";
    } else {
        mainButton.disabled = false;
        toggleButton2.innerText = "Disable";
    }
});

let numbers = [10, 45, 23, 89, 12];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number is:", largest);

let word = "javascript";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
}
console.log("Original word is:", word);
console.log("Reversed word is:", reversed);