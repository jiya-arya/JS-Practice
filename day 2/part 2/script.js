let username = document.querySelector("#username");
let verifyBtn = document.querySelector(".verify");
let msg =document.querySelector("#show");

verifyBtn.addEventListener('click', function () {
    if (username.value === "admin") {
        msg.innerText = "Welcome Admin";
        msg.style.color = "green";
    }else {
        msg.innerText = "Access Denied";
        msg.style.color = "red";
    }
});