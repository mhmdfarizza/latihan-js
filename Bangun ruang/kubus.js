const prompt = require("prompt-sync")({sigint : true})
let sisi = Number(prompt('Masukkan sisi nya : '))

let V = sisi ^ 3;
let L = 6 * sisi ^ 2;
let K = 12 * sisi;

console.log('=============')
console.log('  H A S I L  ')
console.log('=============')

console.log(
`Volume kubus adalah\t\t : ${V.toFixed(2)} cm3
Luas permukaan kubus adalah\t : ${L.toFixed(2)} cm2
Keliling kubus adalah\t\t : ${K.toFixed(2)} cm2`)