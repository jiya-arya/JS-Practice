// 1. Array to store items
let items = [];

// 2. Select DOM elements
let input = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let ul = document.getElementById("itemList");
let removeLastBtn = document.getElementById("removeLastBtn");
let clearBtn = document.getElementById("clearBtn");
const MAX_ITEMS = 5;


addBtn.addEventListener("click", function () {
    // 1. Get input value
    let value = input.value;

    // 2. Prevent empty input
    if (value.trim() === "") {
        alert("Type something first!");
        return;
    }
    // ✅ New: Check max size
    if (items.length >= MAX_ITEMS) {
        alert("List full! You cannot add more items.");
        input.value = "";
        return;
    }
    // 3. Add to array
    items.push(value);

    // 4. Clear input
    input.value = "";

    // 5. Render list
    renderList();
});

function renderList(){
    ul.innerHTML = ""; // clear previous list

    for(let i = 0; i < items.length; i++){
        ul.innerHTML += `
            <li>
                ${items[i]} 
                <button onclick="removeItem(${i})">Remove</button>
            </li>
        `;
    }
}

function removeItem(index){
    items.splice(index, 1); // removes item at specific index
    renderList();            // updates the list
}

removeLastBtn.addEventListener("click", function () {
    if (items.length === 0) {
        alert("List is already empty!");
        return;
    }

    items.pop();  // removes last item
    renderList(); // updates the UI
});

clearBtn.addEventListener("click", function () {
    // 1. Empty the array
    items = [];

    // 2. Re-render the list
    renderList();
});

