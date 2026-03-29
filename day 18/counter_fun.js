//counter function  

let createCounter = function(n) {
    let x = n;
    
    return function() {
        return x++ 
        
    };
};
let counter = createCounter(3);
console.log(counter());
console.log(counter());
console.log(counter());