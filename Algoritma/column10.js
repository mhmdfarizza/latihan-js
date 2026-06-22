const prompt = require ("prompt-sync")({sigint : true})

let tinggi = Number(prompt('Berapa tinggi badan anda'))

let beratIdeal = (tinggi - 100) - 0.1 * (tinggi - 100);

console.log("Berat ideal =", beratIdeal, "kg"); 
