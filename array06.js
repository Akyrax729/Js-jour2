// Tableau Ex 6

function mostFrequent (arr) {

    console.log ('Tableau normal : ', arr)
    let countMax = 0
    let elementMax = ' ';

    for (let item of arr) {
        let countElement = countOccurrence (arr, item)
        if (countElement > countMax) {
            countMax = countElement
            elementMax = item 
        } 
    }
    return elementMax
}

mostFrequent([1,2,2,3,3,3,4,4,4,4])