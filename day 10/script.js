let countChar = document.getElementById("countChar");
let countWord = document.getElementById("countWords");
let countBoth = document.getElementById("countBoth");
let wordInput = document.getElementById("wordInput");
let charCount = document.getElementById("charCount");
let wordCount = document.getElementById("wordCount");


countChar.addEventListener("click", function () {
    console.log("btn count character clicked");
    console.log(wordInput.value.length);

    let charLength = wordInput.value.length;

    charCount.innerHTML = "Character Count: " + charLength;
});
countWord.addEventListener("click", function () {
    console.log("btn count word clicked");
    let wordLength = wordInput.value.trim().split(/\s+/).filter(Boolean).length;
    wordCount.innerHTML = "Word Count: " + wordLength;
});
countBoth.addEventListener("click", function () {
    console.log("btn count both clicked");

    let charLength = wordInput.value.length;
    let wordLength = wordInput.value.trim().split(/\s+/).filter(Boolean).length;
    charCount.innerHTML = "Character Count: " + charLength;
    wordCount.innerHTML = "Word Count: " + wordLength;
});

// is palindrome 
let checkPalindrome = document.getElementById("checkPalindrome");

checkPalindrome.addEventListener("click", function () {

    let result = document.getElementById("result");
    let word = document.getElementById("InputWord");
    console.log(word.value);

    isPalin = isPalindrome(word.value);
    console.log(isPalin);

    if (isPalin) {
        result.innerHTML = "The word is a palindrome";
    } else {
        result.innerHTML = "The word is not a palindrome";
    }


    function isPalindrome(word) {
        let wordArray = word.split("");
        console.log(wordArray);
        let reverseWord = word.split("").reverse();
        console.log(reverseWord);
        console.log(wordArray);

        isPalin = false;

        for (let i = 0; i < wordArray.length; i++) {
            console.log(wordArray[i], reverseWord[i]);
            if (wordArray[i] === reverseWord[i]) {
                isPalin = true;
            }

        }
        return isPalin;
    }
});
