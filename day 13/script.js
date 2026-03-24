// falctorial logic 

let num = 5;
let f = 1;
for(let i = num; i>=1; i--){
f = f * i;
}
console.log(f);

// factorial using recursion

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

console.log(factorial(5));

