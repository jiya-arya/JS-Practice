let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let res = document.querySelector('.res');
let num = document.querySelector('p');

let increase = () => {
    num.innerText = parseInt(num.innerText) + 1;
    if (num.innerText > 0) {
        num.style.color = 'green';

    }
}
let decrease = () => {
    num.innerText = parseInt(num.innerText) - 1;
    if (num.innerText < 0) {
        num.style.color = 'red';
    }
}
let reset = () => {
    num.innerText = 0;
    if(num.innerText == 0){
        num.style.color = 'black';
    }
}

inc.addEventListener('click', increase);
dec.addEventListener('click', decrease);
res.addEventListener('click', reset);

// concept 2 

let msg= document.querySelector('#msg');
let toShow = document.querySelector('.toShow');

let success = document.querySelector('.success');
let error = document.querySelector('.error');
let m ;

let showMsg = (text, color) => {
  toShow.innerText = text;
  toShow.style.color = color;
};

success.addEventListener('click', function () {
  showMsg(msg.value, "green");
});

error.addEventListener('click', function () {
  showMsg(msg.value, "red");
});