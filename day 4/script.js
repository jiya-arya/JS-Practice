let Student1 = {
    name: "jiya",
    age: 12,
    course: "BCA"
};
function show1() {
    document.getElementById("output").innerHTML =
        "Name: " + Student1.name + "<br> Age: " + Student1.age;

}
let students = [
    { name: "A", age: 12 }, { name: "B", age: 19 },
    { name: "g", age: 12 }, { name: "x", age: 19 },
    { name: "q", age: 12 }, { name: "m", age: 19 },
    { name: "y", age: 12 }, { name: "j", age: 19 }

];

function show2() {
    document.getElementById("output").innerHTML =
        "Name: " + students[0].name + "<br> Age: " + students[0].age;

}

let output = document.getElementById("output");

//loop for arr of obj

function show3() {
    output.innerHTML = "";   // clear before loop
    for (let i = 0; i < students.length; i++) {

        output.innerHTML
            += "Name: " + students[i].name
            + " , Age: " + students[i].age + "<br>";


    }
}

let newStudents = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let newStudent = { name, age };
    newStudents.push(newStudent);

    let output = document.getElementById("studentList");
    output.innerHTML = "";

    for (let i = 0; i < newStudents.length; i++) {
        output.innerHTML +=
            newStudents[i].name + " - " + newStudents[i].age + "<br>";
    }

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}


let Stu_list = [];

function AddStu() {
    let ShowList = document.getElementById("Slist");
    let above = document.getElementById("above");
    let below = document.getElementById("below");
    let Sname = document.getElementById("Sname").value;
    let Sage = document.getElementById("Sage").value;

    let Sdata = { Sname, Sage };

    Stu_list.push(Sdata);

    ShowList.innerHTML = "";
    above.innerHTML = "Age above 20:<br>";
    below.innerHTML = "Age below 20:<br>";

    for (let i = 0; i < Stu_list.length; i++) {
        ShowList.innerHTML +=
            (i + 1) + ". Name: " + Stu_list[i].Sname
            + ", Age: " + Stu_list[i].Sage + "<br>";

        if (Stu_list[i].Sage >= 20) {
            above.innerHTML += Stu_list[i].Sname
                + "<br>";

        } else {
            below.innerHTML += Stu_list[i].Sname
                + "<br>";
        }

    }
    let ShowCount = document.getElementById("showCount");
    ShowCount.innerHTML = "Total Student: " + Stu_list.length;

    document.getElementById("Sname").value = "";
    document.getElementById("Sage").value = "";
}

// part 2

// task 1

let buttonCount = document.getElementById("btnCount");

let count = 0; //state (memory variable)
function countClicks() {
    count++;
    document.getElementById("clickCount").innerHTML = "Button Clicked " + count + " times";
}


//task 2
//restrict to min 0 ?
let value = 0;


let addValue = () => {
    value++;
    document.getElementById("currentValue").innerHTML = "Value: " + value;

}
let removeValue = () => {
    if (value > 0) {
        value--;
    }
    document.getElementById("currentValue").innerHTML = "Value: " + value;
}

//task 3

let toggleText = () => {

    let textElement = document.getElementById("toggleOutput");
    if (textElement.innerHTML === "Hello") {
        textElement.innerHTML = "Bye";
    } else {
        textElement.innerHTML = "Hello";
    }
}

//task 4

let submitUsername = () => {

    let username = document.getElementById("username").value;
    if (username.trim() === "") {
        document.getElementById("displayUsername").innerHTML = "Please enter a valid username.";
        document.getElementById("displayUsername").style.color = "red";
    } else {
        document.getElementById("displayUsername").innerHTML = "Welcome " + username;
        document.getElementById("displayUsername").style.color = "green";
    }

}

//task 5
let singleSubmit = () => {
    let inputField = document.getElementById("singleInput");
    let displayField = document.getElementById("submissionMessage");
    if (inputField.disabled) {
        inputField.disabled = false;
        displayField.innerHTML = "Input Enabled";
    } else {
        inputField.disabled = true;
        displayField.innerHTML = "Input Disabled";
    }
}