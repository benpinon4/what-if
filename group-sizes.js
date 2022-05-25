const prompt = require('prompt-sync')({sigint: true});

let classSize = Number(prompt("Enter class size too determine group number: "))

if ((classSize % 3) === 0) {
    console.log((classSize / 3) + " groups of 3" )
} else if((classSize % 2) === 0) {
    console.log("Groups of 3: " + ((classSize - 4)/3))
    console.log("Groups of 2: " + (classSize/(classSize/2)))
} else if ((classSize % 1) === 0) {
    console.log("Groups of 3: " + ((classSize - 2)/3))
    console.log("Groups of 2: " + (classSize/classSize))
} 

//17 5 of 3 1 of 2