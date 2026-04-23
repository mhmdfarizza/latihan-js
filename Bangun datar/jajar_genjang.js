const prompt = require ("prompt-sync")({sigint : true})
let alas = Number(prompt('Masukkan alas : '))
let tinggi = Number(prompt('Masukkan tinggi : '))

let luas = alas * tinggi

console.log("=================")
console.log("   H A S I L     ")
console.log("=================")

console.log(
`Luas jajar genjang adalah\t\t : ${luas.toFixed(2)} cm2`)