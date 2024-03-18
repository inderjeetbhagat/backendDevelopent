/*Problem 6: 'lodash' Usage
Use the lodash library to solve the following problem: Given an array of numbers, write a
function that returns the sum of all even numbers in the array. Use the _.sumBy function from
lodash to achieve this.
*/

var _ = require('lodash');

var data = ["person", "person", 1, 2, 4, 4, 3 ,2 ,1 ,1];
var filter = _.uniq(data);
console.log(filter);