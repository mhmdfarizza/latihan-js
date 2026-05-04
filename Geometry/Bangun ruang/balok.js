const prompt = require("prompt-sync")({sigint : true})
let p = Number(prompt('Masukkan panjangnya : '))
let l = Number(prompt('Masukkan lebarnya : '))
let t = Number(prompt('Masukkan tinggi : '))

let V = p * l * t;
let keliling = 4 * (p + l + t)
let luas = 2 * (p * l + p * t + l * t)

console.log('=============')
console.log('  H A S I L  ')
console.log('=============')

console.log(`
Volume balok adalah\t\t : ${V.toFixed(2)} cm3
Keliling balok adalah\t\t : ${keliling.toFixed(2)} cm2
Luas permukaan adalah\t\t : ${luas.toFixed(2)} cm2`)