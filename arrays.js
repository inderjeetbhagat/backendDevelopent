// Problem 4: Arrays
//  You're organizing a party and want to keep track of the guest list. Create an array called
//  "guestList" and add the names of at least five guests. Then, write a program that checks if a
//  given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
//  otherwise, display "Sorry, you're not on the guest list."
var prompt = require('prompt-sync')();
let guestList = ['inder','aryan','kunal','prince','isha'];
let guest = prompt("Enter the name: ");
let count = 0;

    if(guestList.includes(guest)) {
        count = 1;
    }


if(count !=0) {
    console.log(`Welcome to the party, ${guest}!`);
} else {
    console.log("Sorry, you're not on the guest list");
}
