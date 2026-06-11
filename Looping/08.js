let total = 10;
let text = "";

for(let i = 2; i < 10; i+= 2) {
    total += i;
    text += i + " + ";
}

console.log(text + "10 = " + total);