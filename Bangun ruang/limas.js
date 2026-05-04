const prompt = require("prompt-sync")({sigint : true})

let Lalas = Number(prompt('Masukkan luas alasnya : '))
let T = Number(prompt('Masukkan tingginya : '))
let Lselubung = Number(prompt('Masukkan luas selubungnya : '))

let V = 0.33 * Lalas * T;
let L = Lalas + Lselubung;

console.log("=============")
console.log("  H A S I L  ")
console.log("=============")

console.log(
`Volume limas adalah\t\t : ${V.toFixed(2)} cm3
Luas limas adalah\t\t : ${L.toFixed(2)} cm2`)