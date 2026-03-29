"//this is day 17"

let arr = [1, 2, 5, 4];
let n = arr.length + 1;
let e_sum = (n * (n + 1)) / 2;
let a_sum = 0;

for (let i = 0; i < arr.length; i++) {
    a_sum += arr[i];
}

let missing_num = e_sum - a_sum;

console.log(e_sum);
console.log(a_sum);
console.log(missing_num);

console.log("----------")

// using set/hashing 

let arr2 = [1, 2, 5, 4];
let n2 = arr2.length + 1;
let set = new Set(arr2);
for (let i = 1; i <= n2; i++) {
    if (!set.has(i)) {
        console.log(i);
        break;
    }
}

