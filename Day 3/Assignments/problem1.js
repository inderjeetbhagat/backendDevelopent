/*Problem 1: Understanding Servers and Express.js
Explain in your own words what a server is in the context of Node.js. Then, write step-by-step instructions on
how to create a basic server using Express.js.
*/

//A server is nodejs is a computer program that receives and respond to request from client over a netwok. 
//It processes request and send back appropiate response

const express = require ('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, (req,res) => {
    console.log('Server is running');
})
