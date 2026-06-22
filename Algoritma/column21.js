const prompt = require ("prompt-sync")({sigint : true})

let bulan = Number(prompt('Berapa nomor bulannya? : '))

let nama = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

if(bulan == 1,2,3,4,5,6,7,8,9,10,11,12 ){
    if(bulan == 1) console.log(nama[0])
    else if(bulan == 2) console.log(nama[1])
    else if(bulan == 3) console.log(nama[2])
    else if(bulan == 4) console.log(nama[3])
    else if(bulan == 5) console.log(nama[4])
    else if(bulan == 6) console.log(nama[5])
    else if(bulan == 7) console.log(nama[6])
    else if(bulan == 8) console.log(nama[7])
    else if(bulan == 9) console.log(nama[8])
    else if(bulan == 10) console.log(nama[9])
    else if(bulan == 11) console.log(nama[10])
    else if(bulan == 12) console.log(nama[11])
}else{
    console.log('Bulan tidak tersedia')
}