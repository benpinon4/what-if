const prompt = require('prompt-sync')({sigint: true});

console.log("Here is a list of destination planets and thier corresponding numbers")
console.log("")
console.log("Venus: 1  / Mars: 2   / Jupiter: 3")
console.log("Saturn: 4 / Uranus: 5 / Neptune: 6")
console.log("")

let planetNumber = Number(prompt("Enter the number to your destination planet:"));
let yourWeight = Number(prompt("Enter earth weight to determine destination planet weight:"));

if (planetNumber === 1) {
    console.log("Your weight on Venus: " + (yourWeight*.78))
} else if (planetNumber === 2) {  
    console.log("Your weight on Mars: " + (yourWeight*.39))
} else if (planetNumber === 3) {
    console.log("Your weight on Jupiter: " + (yourWeight*2.65))
} else if (planetNumber === 4) {
    console.log("Your weight on Saturn: " + (yourWeight*1.17))
} else if (planetNumber === 5) {
    console.log("Your weight on Uranus: " + (yourWeight*1.05))
} else if (planetNumber === 6) {
    console.log("Your weight on Neptune: " + (yourWeight*1.23))
}     
