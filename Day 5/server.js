const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/person');

app.get('/', (req, res) => {
    res.send('Welcome to the hotel! How can I help you');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})