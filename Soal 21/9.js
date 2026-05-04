const prompt = require("prompt-sync")({sigint : true})

let p = Number(prompt('Masukkan panjang : '))
let l = Number(prompt('Masukkan lebar : '))

let luas = p*l;
let keliling = 2 * (p+l)

console.log(`
Luasnya adalah : ${luas.toFixed(2)}
Kelilingnya adalah : ${keliling.toFixed(2)}`)