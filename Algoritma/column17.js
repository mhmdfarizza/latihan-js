const prompt = require ("prompt-sync")({sigint : true})

let angka = Number(prompt('Masukkan angka yang mau dicek : '))

if(angka > 0){
    console.log('Angka tersebut positif')
}else if(angka < 0){
    console.log('Angka tersebut negatif')
}else if(angka === 0){
    console.log('Angka tersebut nol')
}else{
    console.log('Ini bukan angka')
}