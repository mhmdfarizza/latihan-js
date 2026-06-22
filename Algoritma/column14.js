const prompt = require ("prompt-sync")({sigint : true})

let jam  = Number(prompt('Berapa jam kamu bekerja? : '))

if( jam <= 48){
    console.log('Gaji anda Rp.' + jam * 2000.00)
}else{
    console.log('Gaji anda Rp.' + ((jam * 2000.00) + ((jam - 48 ) * 3000.00)))
}