const prompt = require("prompt-sync")({sigint : true})
let d1 = Number(prompt('Masukkan diagonal 1 : '))
let d2 = Number(prompt('Masukkan diagonal : '))
let a = Number(prompt('Masukkan sisi a : '))
let b = Number(prompt('Masukkan sisi b : '))

let luas = 0.5 * d1 * d2;
let keliling = 2 * (a + b);

console.log('=============')
console.log('  H A S I L  ')
console.log('=============')

console.log(
`Luas layang-layang adalah\t\t : ${luas.toFixed(2)}
Keliling layang-layang adalah\t : ${keliling.toFixed(2)}`)

