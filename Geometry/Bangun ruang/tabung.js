const prompt = require("prompt-sync")({sigint : true})

let r = Number(prompt('Masukkan jari-jarinya : '))
let T = Number(prompt('Masukkan tingginya : '))

let V = 3.14 * r * r * T;
let L = 2 * 3.14 * r * ( r + T);

console.log("=============")
console.log("  H A S I L  ")
console.log("=============")

console.log(
`Volume tabung adalah\t\t : ${V.toFixed(2)} cm3
Luas tabung adalah\t\t : ${L.toFixed(2)} cm2`
)
