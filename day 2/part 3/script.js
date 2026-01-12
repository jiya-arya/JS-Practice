let display = document.querySelector('#numbers-print');
let display2 = document.querySelector('#print-even');

for (let i = 1; i <= 10; i++) {
    display.innerHTML += i + '<br>';
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        display2.innerHTML += i + '<br>';
    }
}