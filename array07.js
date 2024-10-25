// Tableau Ex 7

function reverseWords (sentence) {

    let wordArray = sentence.split(" ");
    const reversed = wordArray.reverse();
    yoda = reversed.join(" ");
    sentence = yoda

    return sentence
}

let sentence = "I love programming";
console.log(reverseWords(sentence));