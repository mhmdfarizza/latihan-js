const prompt = require("prompt-sync")({sigint : true})
let LuasAlas = Number(prompt('Masukkan luas alas\t : '))
let tinggi = Number(prompt('Masukkan tinggi\t\t : '))
let Kalas = Number(prompt('Masukkan keliling alas\t\t : '))

let V = LuasAlas * tinggi
let L = 2 * LuasAlas + Kalas * tinggi;

console.log("=============")
console.log("  H A S I L  ")
console.log("=============")

console.log(`
Volume prisma segitiga adalah\t\t : ${V.toFixed(2)} cm3
Luas permukaan prisma segitiga adalah\t\t : ${L.toFixed(2)} cm2`)