const prompt = require ("prompt-sync")({sigint : true})
let x = Number(prompt('Berapa meter? : '))

console.log(`
${x} Meter adalah ${(x / 0.0254).toFixed(2)} inchi
${x} Meter adalah ${(x / 0.3048).toFixed(2)} kaki
${x} Meter adalah ${(x / 0.9144).toFixed(2)} yard`);