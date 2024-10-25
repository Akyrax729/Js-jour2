// Tableau Ex 12

function capitalized (cap) {
    let cap1 = cap.split(" ")
    if (!cap) return cap;
    return cap.charAt(0).toUpperCase() + cap.slice(1);
}

console.log(capitalized("coucou, tu vas bien?"))
