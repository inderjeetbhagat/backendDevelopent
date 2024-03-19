// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);
// console.log(typeof JSON);

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Worldddd')
})

app.get('/chicken', (req,res) => {
    res.send('Sending the chicken')
})
app.get('/idli', (req,res) => {

    var customisedIdli = {
        name: 'rava idli',
        size: 10,
        isChutney: true
    }
    res.send(customisedIdli)
})

app.post('/person', (req,res) => {
    console.log("Data is visible");
    res.send("Data is saved")
})

app.listen(3000, () => {
    console.log("Server is running in port 3000");
})