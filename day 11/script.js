//longest word counter

function findLongestWord() {

    let input = document.getElementById("sentenceInput");
    let display = document.getElementById("result");

    console.log(input.value.length);

    let str = input.value;
    let words = str.split(" ").filter(Boolean);
    console.log(words);

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    display.textContent = `The longest word in the sentence is: ${longestWord}`;

}