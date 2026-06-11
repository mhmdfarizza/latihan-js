const prompt = require("prompt-sync")();

let angka = Number(prompt("Masukkan angka:")); 
let header = "*\t";

for (let i = 1; i <= angka; i++) {
    header += i + "\t";
}

console.log(header);

for (let i = 1; i <= angka; i++) {
    let baris = i + "\t";

    for (let j = 1; j <= angka; j++) {
        baris += (i * j) + "\t";
    }
    console.log(baris);
}