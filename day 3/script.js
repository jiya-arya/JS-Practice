// task 1 
let n = document.getElementById("name");
let a = document.getElementById("age");
let btn1 = document.getElementById("btn1");
let show = document.getElementById("showOP");
let Showbtn = document.getElementById("showM");
let increase = document.getElementById("incBtn");
let decrease = document.getElementById("decBtn");
let counter = document.getElementById("numShow");
// let IncDecBtn = document.getElementsByClassName("IncDecBtn");


btn1.addEventListener('click', function (e) {
    e.preventDefault(); // this stop the form submitting/reloading the page

    let name = n.value;
    let age = a.value;
    show.innerText = "hello!, " + name + " you are" + age + " year old";


    // task 2 
    if (age < 18) {
        show.innerText = name + ", you are minor !!";
    } else {
        show.innerText = name + ", you are an Adult !!";
    }

});


// task 3 
Showbtn.addEventListener('click', function (e) {
    e.preventDefault();


    if (Showbtn.innerText === "Hide") {
        show.style.display = "none";
        Showbtn.innerText = "Show";
    } else {
        show.style.display = "block";
        Showbtn.innerText = "Hide";
    }

});

// task 4 
increase.addEventListener("click", () => {
    counter.value = Number(counter.value) + 1;
});

decrease.addEventListener("click", () => {
    counter.value = Number(counter.value) - 1;
});


// task 5
let arr = ["Kritima", "Pooja", "Himanshu", "Janvi", "Jiya"];
let arrBtn = document.getElementById("arrBtn");
let arrShow = document.getElementById("arrShow");

arrShow.style.display = "none";

arrBtn.addEventListener("click", function () {

    if (arrBtn.innerText === "Show Array") {

        arrShow.innerHTML = "";   // clear UI

        for (let i = 0; i < arr.length; i++) {
            arrShow.innerHTML += arr[i] + "<br>";
        }

        arrShow.style.display = "block";
        arrBtn.innerText = "Hide Array";



    } else {
        arrShow.style.display = "none";
        arrBtn.innerText = "Show Array";
    }
});


// task 6 
let addElem = document.getElementById("addElem");
let element = document.getElementById("arrInput");

addElem.addEventListener("click", function () {

    arr.push(element.value);     // add to array
    element.value = "";          // clear input
    arrShow.innerHTML = "";      // clear UI

    for (let i = 0; i < arr.length; i++) {
        arrShow.innerHTML += arr[i] + "<br>";
    }


    // task 7 : show total items in array
    console.log(arr.length);
    let showTotal = document.getElementById("totalStudents");

    showTotal.innerText = arr.length
});

//to do no repeat elements in array no dublicates

// task 8
let numArrInput = document.getElementById("numArrInput");
let numArrBtn = document.getElementById("numArrBtn");
let addNumElem = document.getElementById("addNumElem");
let numArrShow = document.getElementById("numArrShow");
let totalNumbers = document.getElementById("totalNumbers");
let sumOfNumbers = document.getElementById("sumOfNumbers");


let numArr = [2];
numArrShow.innerHTML = "";
numArrShow.style.display = "none";

numArrBtn.addEventListener('click', function () {

    if (numArrBtn.innerText === "Show Array") {

        numArrBtn.innerText = "Hide Array";
        numArrShow.style.display = "block";

        for (let i = 0; i < numArr.length; i++) {
            numArrShow.innerHTML += numArr[i] + "<br>";
        }

    } else {

        numArrBtn.innerText = "Show Array";
        numArrShow.style.display = "none";

    }

});

let evenNumbers = document.getElementById("evenNumbers"); let oddNumbers = document.getElementById("oddNumbers");

addNumElem.addEventListener("click", function () {

    numArr.push(Number(numArrInput.value));
    numArrInput.value = "";

    numArrShow.innerHTML = "";
    evenNumbers.innerHTML = "";
    oddNumbers.innerHTML = "";

    for (let i = 0; i < numArr.length; i++) {

        numArrShow.innerHTML += numArr[i] + "<br>";

        if (numArr[i] % 2 === 0) {
            evenNumbers.innerHTML += numArr[i] + " , ";
        } else {
            oddNumbers.innerHTML += numArr[i] + " , ";
        }
    }

    totalNumbers.innerText = numArr.length;

    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    sumOfNumbers.innerText = sum;
});












































