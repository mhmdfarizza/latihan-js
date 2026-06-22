const prompt = require ("prompt-sync")({sigint : true})

let x = Number(prompt('Berapa nilai x nya? : '))
let y = Number(prompt('Berapa nilai y nya? : '))

if( y > 0 && x > 0){
    console.log('Titik P terletak di kuadran I')
}else if( y < 0 && x > 0){
    console.log('Titik P terletak di kuadran II')
}else if( y < 0 && x < 0){
    console.log('Titik P terletak di kuadran III')
}else if( y > 0 && y < 0){
    console.log('Titik P terletak di kuadran IV')
}else{
    console.log('Titik P tidak terletak di kuadran')
}