const prompt = require("prompt-sync")({sigint : true})
let panjang = Number(prompt('Masukkan panjang : '))
let lebar = Number(prompt('Masukkan lebar : '))

let luas = panjang*lebar
let keliling = panjang + lebar * 2;

console.log("=====================")
console.log("       H A S I L     ")
console.log("=====================")

console.log(
`Luas persegi panjang adalah\t\t : ${luas.toFixed(2)} cm2
Keliling persegi panjang adalah\t\t : ${keliling.toFixed(2)} cm2`
)