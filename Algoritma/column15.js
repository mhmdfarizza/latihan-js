const prompt = require ("prompt-sync")({sigint : true})

let tahun = Number(prompt('Masukkan tahunnya : '))

if( tahun % 4 == 0){
    console.log(tahun + ' Tahun ini adalah tahun kabisat')
}else{
    console.log(tahun + ' Tahun ini bukan tahun kabisat')
}