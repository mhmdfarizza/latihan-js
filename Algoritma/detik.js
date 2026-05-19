const prompt = require("prompt-sync")({sigint : true})

let detik = Number(prompt('Masukkan detik nya : '))

let menit = detik / 60;
let jam = detik / 3600;
let hari = detik /  86400;

console.log(`
${detik} detik = ${menit.toFixed(2)} menit
${detik} detik = ${jam.toFixed(5)} jam
${detik} detik = ${hari.toFixed(5)} hari`)