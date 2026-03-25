// Function to find the second smallest number in an array

function secondSmallest(arr) {
    let s = Infinity;
    let ss = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < s) {
            ss = s;
            s = arr[i];
        } 
        else if (arr[i] < ss && arr[i] !== s) {
            ss = arr[i];
        }
    }

    return ss === Infinity ? "No second smallest" : ss;
}

let result1 = secondSmallest([5, 2, 9, 1, 5, 6]);
console.log(result1);

let result2 = secondSmallest([1, 1, 1]);
console.log(result2);

let result3 = secondSmallest([3, 1, 4, 1, 5, 9]);
console.log(result3);

let result4 = secondSmallest([10]);
console.log(result4);

let result5 = secondSmallest([]);
console.log(result5);

let result6 = secondSmallest([-2, -2, -3, -4]);
console.log(result6);