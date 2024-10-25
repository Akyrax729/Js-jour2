// Tableau Ex 6


function mostFrequent(arr) {
    let occurrences = {};
    let maxCount = 0;
    let mostFrequentElement = null;

    for (let element of arr) {
        occurrences[element] = (occurrences[element] || 0) + 1;

        if (occurrences[element] > maxCount) {
            maxCount = occurrences[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

const tableau = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3];
console.log(`L'élément le plus fréquent est : ${mostFrequent(tableau)}`);