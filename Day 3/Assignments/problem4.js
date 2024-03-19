/* Problem 4: Creating a Route with Express.js
a) Explain what the HTTP GET method is used for in the context of web development.
b) Write the code to create a simple Express.js route that responds with "Hello, World!" when a user visits the
root URL ("/").*/

/*
a) It is often used to retreive data/information from a specific URL

b)
*/

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(3000);