const prompt = require ("prompt-sync")({sigint : true})

let angka = Number(prompt("Masukkan angka yang mau dicek : "))

if(angka % 2 == 0){
    console.log('angka '+ angka +' ini adalah angka genap')
}else{
    console.log('angka '+ angka +' ini adalah angka ganjil')
}