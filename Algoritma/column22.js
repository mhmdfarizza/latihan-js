const prompt = require ("prompt-sync")({sigint : true})

let jam = Number(prompt("Masukkan jam:"));
let menit = Number(prompt("Masukkan menit:"));
let detik = Number(prompt("Masukkan detik:"));

detik++;

if (detik == 60) {
    detik = 0;
    menit++;
}

if (menit == 60) {
    menit = 0;
    jam++;
}

if (jam == 24) {
    jam = 0;
}

console.log("Waktu baru: " + jam + ":" + menit + ":" + detik);