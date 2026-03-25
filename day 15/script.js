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

let result = secondSmallest([5, 2, 9, 1, 5, 6]);
console.log(result);