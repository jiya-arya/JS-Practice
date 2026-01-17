// Task 2: Create an empty array
// Create let students = []
// This will store all student objects {name: "", marks: []}

let students = [];

// Function — Add Student
// Create function addStudent()
// Read name and marks from DOM
// Convert marks input (comma separated string) → array of numbers
// Add {name, marks} object to students array
// Clear input fields after adding
// Alert “Student added!”

function addStudent() {
    const nameInput = document.getElementById('studentName');
    const marksInput = document.getElementById('studentMarks');
    console.log(marksInput.value);
    const name = nameInput.value;

    // let marksInput = 
    let marksArray = marksInput.value.split(",");
    console.log(marksArray);
    let marks = marksArray.map(mark => parseFloat(mark.trim()));
    console.log(marks); 




    // students.push({ name, marks });
    // nameInput.value = '';
    // marksInput.value = '';
    // alert('Student added!');
}