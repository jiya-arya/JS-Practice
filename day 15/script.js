"//find second smallest number in the array"

function secondSmallest(arr) {
    let s = arr[0]
    let ss = arr[1]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < s) {
            ss = s
            s = arr[i]
        }
        else if (arr[i] < ss && arr[i] != s) {
            ss = arr[i]
        }
    }
    return ss;
}
let result = secondSmallest([5, 2, 9, 1, 5, 6])
console.log(result)

