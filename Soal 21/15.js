const prompt = require("prompt-sync")({sigint : true})

const password = 78821;
let angka = Number(prompt('Masukkan password yang berisi angka 5 digit : '))

if(angka == password){
    console.log('You are authenticated')
}else{
    console.log('You have no acces')
}