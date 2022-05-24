const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Enter a number here to determine FIZZBUZZ: "))

if ((num1 % 15) === 0) {
    console.log("FIZZBUZZ");
} else if((num1 % 5) === 0) {
    console.log("Buzz");
} else if((num1 % 3) === 0) {
    console.log("Fizz");
}