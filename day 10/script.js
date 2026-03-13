let countChar = document.getElementById("countChar");
let countWord = document.getElementById("countWords");
let countBoth = document.getElementById("countBoth");
let wordInput = document.getElementById("wordInput");
let charCount = document.getElementById("charCount");
let wordCount = document.getElementById("wordCount");

// console.log(wordInput.value.length());

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