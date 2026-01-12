let itemsArray = [];
let addBtn = document.getElementById("addBtn");
let display = document.getElementById("list");
let currentFilter = "all"; // all | done | pending

function setFilter(filter) {
    currentFilter = filter;
    renderList();
}


let showAllBtn = document.getElementById("showAll");
let showCompletedBtn = document.getElementById("showCompleted");
let showPendingBtn = document.getElementById("showPending");

addBtn.addEventListener('click', function () {

    let input = document.getElementById("itemInput");
    let msg = document.getElementById("Msg");

    if (input.value.trim() === "") {
        msg.innerText = "Please Enter Something";
        msg.style.color = "red";
        return;
    }

    itemsArray.push({
        text: input.value,
        done: false
    });

    input.value = "";
    msg.innerText = "";
    renderList();
});



function renderList() {
    display.innerHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {

        let item = itemsArray[i];

        if (currentFilter === "done" && !item.done) continue;
        if (currentFilter === "pending" && item.done) continue;

        display.innerHTML += `
            <div class="list-item">
                <li style="
                    text-decoration: ${item.done ? "line-through" : "none"};
                    color: ${item.done ? "gray" : "black"};
                ">
                    ${item.text}
                </li>

                <button onclick="toggleDone(${i})">
                    ${item.done ? "Undo" : "Done"}
                </button>

                <button onclick="removeItem(${i})">X</button>
            </div>
        `;
    }

    document.getElementById("itemCount").innerText =
        `Total Items: ${itemsArray.length}`;
}


function toggleDone(index) {
    itemsArray[index].done = !itemsArray[index].done; 
    //logic: when clicked, toggle the done status . meaning if it's true, make it false and vice versa . in simple words, change the status , if status is done, make it undone and if undone, make it done
    renderList();
}


function removeItem(index) {
    itemsArray.splice(index, 1); 
    // remove 1 item at the given index 
    renderList();
}



