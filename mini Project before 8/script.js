let students = [];

function addStudent() {
    const nameInput = document.getElementById('studentName');
    const marksInput = document.getElementById('studentMarks');

    if (nameInput.value === "" || marksInput.value === "") {
        alert("Enter Name and Marks");
        return;
    }

    const name = nameInput.value;
    let marksArray = marksInput.value.split(",");
    let marks = marksArray.map(mark => parseFloat(mark.trim()));

    if (marks.includes(NaN)) {
        alert("Please enter valid numbers only");
        return;
    }

    students.push({ name, marks });

    nameInput.value = "";
    marksInput.value = "";
}

function calculateAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function calculateGrade(avg) {
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 50) return "C";
    else return "Fail";
}

function generateReport() {
    let display = document.getElementById("report");
    display.innerHTML = "";

    let highestAvg = 0;
    let topStudents = [];

    for (let i = 0; i < students.length; i++) {
        let avg = calculateAverage(students[i].marks);
        let grade = calculateGrade(avg);

        display.innerHTML += "<p><b>NAME:</b> " + students[i].name +
            " | <b>AVERAGE:</b> " + avg.toFixed(2) +
            " | <b>GRADE:</b> " + grade + "</p><br>";

        if (avg > highestAvg) {
            highestAvg = avg;
            topStudents = [students[i].name];
        } else if (avg === highestAvg) {
            topStudents.push(students[i].name);
        }
    }

    display.innerHTML += "<p><b>Top Student(s):</b> " + topStudents.join(", ") +
        " | <b>Average:</b> " + highestAvg.toFixed(2) + "</p>";
}