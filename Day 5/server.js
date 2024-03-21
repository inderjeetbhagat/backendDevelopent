const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // store in req.body


const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');
const Task = require('./models/Task');

app.post('/api/task', async (req,res) => {
    try{
        const data = req.body;
        const newTask = new Task(data);
        const response = await newTask.save();
        console.log('Data Saved');
        res.status(200).json(response);
    } catch(error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server error'})
    }
});

app.get('/api/task', async (req, res) => {
    try{
    const data = await Task.find();
    res.status(200).json(data);
}catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'});

}
})

app.get('/', (req, res) => {
    res.send('Welcome to the hotel! How can I help you');
});




//Get Method





//importing router file

const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use('/menu', menuRoutes)
app.use('/person',personRoutes)

app.listen(3000, () => {
    console.log('Listening on port 3000');
})