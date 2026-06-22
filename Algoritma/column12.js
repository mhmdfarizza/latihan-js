const prompt = require ("prompt-sync")({sigint : true})

let huruf = prompt('Masukkan hurufnya : ').toLowerCase();

if ("aiueo".includes(huruf)){
    console.log("Huruf vokal")
}else{
    console.log("Huruf konsonan")
}