// Tableaux

const fruit1 = "Pomme"
const fruit2 = "Poire"
const fruit3 = "Fraise"

const fruits = ["Pomme", "Poire", "Fraise", 2 , false]

const copy = [...fruits]
copy[0] = "Framboise"

console.log(fruits)
console.log(copy)