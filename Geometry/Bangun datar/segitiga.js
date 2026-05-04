const prompt = require("prompt-sync")({sigint : true})
let alas = Number(prompt('Masukkan alas : '))
let tinggi = Number(prompt('Masukkan tinggi : '))

let luas = 0.5 * alas * tinggi;
let keliling = alas + tinggi + (Math.sqrt(alas^2 + tinggi ^2))

console.log("==================")
console.log("     H A S I L    ")
console.log("==================")

console.log(
`Luas segitiga adalah\t\t : ${luas.toFixed(2)} cm2
Keliling segitiga adalah\t : ${keliling.toFixed(2)} cm2`
)