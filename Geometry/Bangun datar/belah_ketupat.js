const prompt = require("prompt-sync")({sigint : true})
let d1 = Number(prompt('Masukkan d1 nya : '))
let d2 = Number(prompt('Masukkan d2 nya : '))

let luas = 0.5 * d1 * d2;
let sisi = (Math.sqrt(0.5 * d1)^2 + (0.5 * d2)^2);
let keliling = sisi * 4;

console.log('===========')
console.log(' H A S I L ')
console.log('===========')

console.log(
`Luas belah ketupat adalah\t\t : ${luas.toFixed(2)} cm
Keliling belah ketupat adalah\t\t : ${keliling.toFixed(2)} cm
Sisi belah ketupat adalah\t\t : ${sisi.toFixed(2)} cm`
)