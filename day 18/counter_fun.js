//counter function  

let createCounter = function(n) {
    let x = n;
    
    return function() {
        return x++ 
        
    };
};
let counter = createCounter(3);
console.log(counter()); 
// this will return 3 becoause the first time we call counter, x is 3 and then it will increment x to 4 for the next call
console.log(counter());
console.log(counter());