const prompt = require ("prompt-sync")({ sigint : true})
let sisiA = Number(prompt('Masukkan sisi atas : '))
let sisib = Number(prompt('Masukkan sisi bawah : '))
let tinggi = Number(prompt('Masukkan tinggi : '))

let luas = 0.5 * (sisiA + sisib) * tinggi;
let keliling = sisiA + sisib + tinggi

console.log('=============')
console.log('  H A S I L  ')
console.log('=============')

console.log(
`Luas trapesium adalah\t\t : ${luas.toFixed(2)} cm2
Keliling trapesium adalah\t : ${keliling.toFixed(2)} cm2`
)