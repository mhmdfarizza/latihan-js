const prompt = require("prompt-sync")({sigint : true})
let angka1 = Number(prompt('masukkan angka pertama : '))
let angka2 = Number(prompt('Masukkan angka kedua : '))
let operasi = (prompt('masukkan sistem operasi yang anda mau ( +, -, x, : ) : '))

let tambah = angka1 + angka2
let bagi = angka1 / angka2
let kali = angka1 * angka2
let kurang = angka1 - angka2

console.log("=============")
console.log("  H A S I L  ")
console.log("=============")

if(operasi==="+"){
    console.log('Hasilnya adalah : ' + tambah)
}else if(operasi==="-"){
    console.log('Hasilnya adalah : ' + kurang)
}else if(operasi==="x"){
    console.log('Hasilnya adalah : ' + kali)
}else if(operasi===":"){
    console.log('Hasilnya adalah : ' + bagi)
}