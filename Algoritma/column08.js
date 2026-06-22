const prompt = require ("prompt-sync")({sigint : true})
let x = Number(prompt('Berapa cm jarak yang akan ditempuh? : '))

let km = Math.floor(x / 100000);
let m = Math.floor((x % 100000) / 100);
let cm = (x % 100000) % 100;

console.log("Jarak yang harus ditempuh adalah " + km + " km + " + m + " m + " + cm + " cm");