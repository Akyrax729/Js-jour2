// Tableau Ex 5


function countOccurrences (arr, value) {

    console.log ('Tableau normal : ', arr)
    arr1 = 0

    for (i=0; i<arr.length; i++) {
        let arr0 = arr[i]

        if ( value === arr[i]) {
            arr1 ++
            
        }
        
    }
    console.log("Il a ",arr1 ," occurrences")
    
}

countOccurrences(["Hello", "world", "Hello", "world", "Hello", "world", "Hello", "world", "Hello", "world" ], "Hello")