// find second largest number in an array

let numarr = [18, 3, 8, 18, 11]

let largest = numarr[0];
let s_largest = numarr[1]
console.log(largest) // 18
console.log(s_largest) // 11
console.log("------")

for (let i = 0; i < numarr.length; i++) {
    console.log(numarr[i])
    // console.log("-------")
    if (numarr[i] > largest) {
        s_largest = largest
        largest = numarr[i]
    }
    else if (numarr[i] > s_largest && numarr[i] != largest) {
        s_largest = numarr[i]
    }
}

console.log("------")
console.log(largest) // 18
console.log(s_largest) // 12