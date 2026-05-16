const prompt = require("prompt-sync")({sigint : true})

let makanan = prompt('Mau pesan apa?\t : ')
let harga = Number(prompt('Berapa harganya? : '))
let pajak = (10 / 100)* harga;
let fee = (5 / 100)* harga;
let total = harga + pajak + fee;

console.log(`
Makanan yang dipesan\t : ${makanan}
Harganya adalah\t\t : Rp. ${harga}
Pajaknya adalah\t\t : Rp. ${pajak.toFixed(0)}
Fee nya adalah\t\t : Rp. ${fee.toFixed(0)}
Total harganya adalah\t : Rp. ${total.toFixed(0)}`
)