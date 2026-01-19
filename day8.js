console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () { });
console.log(typeof NaN);
console.log("---------")
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("")); // length = 0  → falsy 
console.log(Boolean(" ")); // length = 1  → truthy
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([])); //becoz it is a object Objects are truthy, even if they look empty.
console.log(Boolean({}));
console.log("---------");
{
    let a = 10;
    var b = 20;
}
console.log(b);
// console.log(a); // why error?

console.log("---------");
sayHi();

function sayHi() {
    console.log("Hi");
}

// sayHello();

// const sayHello = function () {
//     console.log("Hello");
// };


console.log("---------");

function normal() {
    console.log(this);
}
normal();
