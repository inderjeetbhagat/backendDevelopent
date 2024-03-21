const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // store in req.body


const Person = require('./models/person');

app.get('/', (req, res) => {
    res.send('Welcome to the hotel! How can I help you');
});

app.post('/person', (req,res) =>{

const data = req.body; // Assuming the request bosy contains the person data
//Create a new person document using the mongoose model
const newPerson = new Person(data);
// newPerson.name = data.name;
// newPerson.age = data.age;
// newPerson.mobile = data.mobile;
// newPerson.email = data.email;
// newPerson.address = data.address;

//Save the new person indb
newPerson.save((err, savedPerson) => {
    if(err) {
        console.log('Error Saving Person: ', err);
        res.status(500).json({err: 'Internal Server error'})
    } else {
        console.log(' Data saved succesfully');
        res.status(200).json(savedPerson);
    }
})

})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})