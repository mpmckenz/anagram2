document.getElementById("findButton").onclick = function() {

    let wordText = document.getElementById("inputWord").value;
        wordText = alphabetize(wordText)
    let anagrams = [];

    for(let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if (wordText == alphabetize(currentWord)) {
            anagrams.push(currentWord)
        }
    }

    for(let word in anagrams) {
        let span = document.createElement("span");
        let textContent = document.createTextNode(anagrams[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordDiv").appendChild(span)
    }
}
 function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
   }



//     function alphabetize(typedText) {
//         return typedText.toLowerCase().split("").sort().join("").trim();
//        }
// }
// function anagramGrouper(words){
//     const anagrams = {};
//     words.forEach((word)=>{
//         const sortedWord = alphabetize(word);
//         if (anagrams[sortedWord]) {
//             return anagrams[sortedWord].push(word);
//         }
//         anagrams[sortedWord] = [word];
//      });
//     return anagrams;
// }

// const groupedAnagrams = getGroupedAnagrams(words);

// for(const sortedWord in groupedAnagrams){
//     console.log(groupedAnagrams[sortedWord].toString());
// }