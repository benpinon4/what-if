const prompt = require('prompt-sync')({sigint: true});


let age = Number(prompt("Enter your age here: "));







if (age < 16) {
    console.log("You can't drive, vote, or rent a car.");
} else if (age === 16) {
    console.log("You can drive but not vote");
} else if (age === 17) {
    console.log("You can drive but not vote");
} else if (age >= 25) {
    console.log("You can do anything you want"); // important the 25 range is placed here. otherwise wont work.
} else if (age >= 18) {
    console.log("You can drive and vote and rent car");
} else if (age <= 24){
    console.log("You can drive and vote and rent car");
}

