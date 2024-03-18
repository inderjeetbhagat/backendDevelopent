// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt', 'Hi'+ user.username + '\n', ()=> {
//     console.log("File is created");
// } );
var _ = require('lodash');
const notes = require('./notes');

var data = ["person", "person", 1, 2, 4, 4, 3 ,2 ,1 ,1];
var filter = _.uniq(data);
console.log(filter);

console.log(notes.age);