function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
let fiveWordAnagramSets = {};
let AnagramSetList = [];

for (let i = 0; i < words.length; i++) {
    fiveWordAnagramSets[alphabetize(words[i])] = [];
}

for (i = 0; i < words.length; i++) {
    let abcWords = alphabetize(words[i]);
    if (abcWords in fiveWordAnagramSets) {
        fiveWordAnagramSets[abcWords].push(words[i]);
    }
}

function postList(text) {
    const postList = document.createElement("div");
    const textNode = document.createTextNode(text);
    postList.appendChild(textNode);
    document.getElementById("fiveWords").appendChild(postList);
}

for (let i = 0; i < words.length; i++) {
    if (fiveWordAnagramSets[alphabetize(words[i])].length >= 5 && alphabetize(words[i])
        in AnagramSetList === false) {
        postList(alphabetize(words[i]) + ": [" + fiveWordAnagramSets[alphabetize(words[i])] + "]");
        AnagramSetList[alphabetize(words[i])] = [];
    }
}