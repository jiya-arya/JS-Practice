//this is day 16 of JS practice

// Problem:
// You are given an array of strings.
// 👉 You have to group words that are anagrams of each other.

// Input:
// ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

// Solution:

function groupAnagrams(arr) {
    let obj = {};

    for (let word of arr) {
        // step 1: key banao (sorted word)
        let key = word.split('').sort().join('');

        // step 2: agar key nahi hai to empty array banao
        if (!obj[key]) {
            obj[key] = [];
            // agar key already hai to kuch nahi karna, kyunki hum usme word push karenge
            // agar key nahi hai to empty array banao, aur usme word push karna hai, isliye humne pehle empty array banaya hai
        }
        // step 3: word ko us key me push karo
        obj[key].push(word);
    }
    // step 4: sirf values return karo
    return Object.values(obj);
}


// 🔥 Test
let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(arr));

// let word = "hello"
// let sortedWord = word.split('')
// console.log(sortedWord)
// let splitWord = sortedWord.sort()
// console.log(splitWord)
// let joinWord = splitWord.join('')
// .join() is used to join the elements of an array into a string, with an optional separator between the elements. In this case, we are joining the sorted characters of the word back into a single string without any separator, which will give us the sorted version of the original word.

// hmne join() ke parameter me '' diya hai, iska matlab hai ki hum characters ko bina kisi separator ke join karna chahte hain. Agar humne ',' diya hota, to characters ke beech me comma aa jata. Agar humne ' ' (space) diya hota, to characters ke beech me space aa jata. Lekin yahan humne '' diya hai, isliye characters directly ek saath join ho jayenge without any separator.
//agr hum '' nhi dete to by default separator ',' hota, to output me characters ke beech me comma aa jata. Lekin humne '' diya hai, isliye characters directly ek saath join ho jayenge without any separator, jo ki sorted version of the original word hoga.

// console.log(joinWord)

