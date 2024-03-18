/*Problem 5: Using 'os' Module
Create a Node.js program that uses the os module to display the following system
information:
● Total memory available (in bytes)
● Free memory available (in bytes)
● Operating system platform
● Number of CPU cores*/

const os = require('os');
console.log("Total Memory : " + os.totalmem());
console.log("Free Memory : " + os.freemem());
console.log("Operating System Platform : " + os.platform());
console.log("Number of CPU cores : " + os.availableParallelism());

