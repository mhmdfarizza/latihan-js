const prompt = require("prompt-sync")({sigint : true})

let hari = Number(prompt('Masukkan hari nya : '))

let minggu = hari / 7;
let bulan = hari / 30;
let tahun = hari /  365;

console.log(`
${hari} hari = ${minggu.toFixed(2)} minggu
${hari} hari = ${bulan.toFixed(2)} bulan
${hari} hari = ${tahun.toFixed(2)} tahun`)