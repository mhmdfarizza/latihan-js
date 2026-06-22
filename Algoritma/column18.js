const prompt = require ("prompt-sync")({sigint : true})

let jam = Number(prompt('Berapa jam kamu bekerja? : '))
let golongan = prompt('Apa golongan kamu? (A, B, C ,D) : ').toUpperCase();
let upah = 0;

if(golongan == "A") upah = 4000;
else if(golongan == "B") upah = 5000;
else if(golongan == "C") upah = 6000;
else if(golongan == "E") upah = 7500;

let gaji;

if( jam <= 48){
    gaji = jam * upah
}else{
    gaji = (jam * upah) + ((jam - 48 ) * 3000.00)
}

console.log('Gaji anda Rp.' + gaji)