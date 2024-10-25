// Tableau Ex 10

function mergeArrays(arr1, arr2) {
    fused = [...arr1, ...arr2]
    // fused.sort()
    console.log (fused)
    
}

mergeArrays ([1,3,5,7,9],[0,2,4,6,8])

function isSorted (arr) {
    for (i = 0; i<arr.length; i++) {
        
        if (arr[i] > arr[i+1]) {
            return false
        } 
        
    }
    return true
}

console.log(isSorted(fused))
