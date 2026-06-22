const prompt = require ("prompt-sync")({sigint : true})

let angka = Number(prompt('Masukkan angka : '))

if(angka == 1){
    console.log('Satu')
}else if(angka == 2){
    console.log('Dua')
}else if(angka == 3){
    console.log('Tiga')
}else if(angka == 4){
    console.log('Empat')
}else{
    console.log('Angka yang dimasukkan salah')
}