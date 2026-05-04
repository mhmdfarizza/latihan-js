const prompt = require("prompt-sync")({sigint : true})
let r = Number(prompt('Masukkan jari-jari nya : '))

let luas = 3.14 * r * r;
let keliling = 2 * 3.14 * r;

console.log('=============')
console.log('  H A S I L  ')
console.log('=============')

console.log(
`Luas lingkaran adalah\t\t : ${luas.toFixed(2)} 
keliling lingkaran adalah\t : ${keliling.toFixed(2)}`
)