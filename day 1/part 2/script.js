let btn = document.querySelector('.btn');
let i1 = document.querySelector('#ip-1');//age
let text = document.querySelector('p');


btn.addEventListener('click', function () {
    if (i1.value > 18 && i1.value < 65) {
        text.innerText = "Allowed";
        text.style.color = "green";
    } 
    else if (i1.value >= 65) {
        text.innerText = "senior citizen allowed";
        text.style.color = "green";
    }
    else {
        text.innerText = "too young";
        text.style.color = "red";
    }
})

