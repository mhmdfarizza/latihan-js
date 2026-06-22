const prompt = require("prompt-sync")({sigint : true})

let d1 = Number(prompt('Hari kesatu : '))
let m1 = Number(prompt('Minggu kesatu : '))
let y1 = Number(prompt('Tahun kesatu : '))

let d2 = Number(prompt('Hari kedua : '))
let m2 = Number(prompt('Minggu kedua : '))
let y2 = Number(prompt('Tahun kedua : '))

let selisih = Math.abs((y2 * 365 + m2 * 30 + d2) - (y1 * 365 + m1 * 30 + d1))

let tahun = Math.floor(selisih / 365);
let bulan = Math.floor((selisih % 365) / 30);
let hari = (selisih % 365) % 30;

console.log("Selisihnya " + tahun + " tahun, " + bulan + " bulan, " + hari + " hari.");