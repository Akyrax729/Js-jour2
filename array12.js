// Tableau Ex 12

function capitalized (cap) {
    
    return cap
    .split (' ')
    .map (maj => maj.charAt(0).toUpperCase() 
    + maj.slice(1))
    .join (" ")
}

console.log(capitalized("coucou, tu vas bien?"))
