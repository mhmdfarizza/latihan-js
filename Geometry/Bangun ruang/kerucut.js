const prompt = require("prompt-sync")({sigint : true})

let r = Number(prompt('Masukkan jari-jarinya : '))
let T = Number(prompt('Masukkan tingginya : '))

let S = (Math.sqrt( r * r + T * T));
let V = 0.33 * 3.14 * r * r * T;
let L = 3.14 * r * ( r + S);

console.log("=============")
console.log("  H A S I L  ")
console.log("=============")

console.log(`
Volume kerucut adalah\t\t : ${V.toFixed(2)} cm3
Luas permukaan kerucut\t\t : ${L.toFixed(2)} cm2`)