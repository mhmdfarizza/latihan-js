const prompt = require ("prompt-sync")({sigint : true})

let uang = Number(prompt('Berapa nilai uang yang mau di tentukan berapa nilai tukaran pecahannya : Rp.'))

let p1000 = Math.floor(uang / 1000);
let p500 = Math.floor((uang % 1000) / 500);
let p100 = Math.floor((uang % 500) / 100);
let p50 = Math.floor((uang % 100) / 50);
let p25 = Math.floor((uang % 50) / 25);

console.log("Uang senilai Rp."+ uang + " setara dengan "+ p1000 + " buah pecahan Rp.1000, ditambah " + p500 + " buah pecahan Rp.500, ditambah " + p100 + " buah pecahan Rp.100, ditambah " + p50 + " buah pecahan Rp.50, ditambah " + p25 + " buah pecahan Rp.25");