let btn = document.getElementById('countVowels');

btn.addEventListener('click', function () {
    console.log("btn clicked");

    let word = document.getElementById('wordVowel').value;
    console.log(word);

    let display = document.getElementById('getCount');

    let vowels = ['a', 'e', 'i', 'o', 'u']
    console.log(vowels);

    let countVowels = (word) => {
        let count = 0;

        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i].toLowerCase())) 
                {
               count++;
            }
            console.log(count);

        }
        return count;
    }

    display.innerHTML = "Number of vowels: " + countVowels(word);

    
});