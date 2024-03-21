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

app.post('/menu', async (req, res) =>  {
    try{
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('Data Saved');
        res.status(200).json(response);

    } catch(error) {
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
    }
})

app.get('/menu', async (req,res) =>{
    try{
    const data = await MenuItem.find();
    console.log("Data Fetched");
    res.status(200).json(data);
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

app.post('/person', async (req,res) =>{

    try{
        const data = req.body; // Assuming the request bosy contains the person data
        //Create a new person document using the mongoose model
        const newPerson = new Person(data);
        // newPerson.name = data.name;
        // newPerson.age = data.age;
        // newPerson.mobile = data.mobile;
        // newPerson.email = data.email;
        // newPerson.address = data.address;
        const response = await newPerson.save();
        console.log('Data Saved')
        res.status(200).json(response);

    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }

//Save the new person indb
// newPerson.save((error, savedPerson) => {
//     if(error) {
//         console.log('Error Saving Person: ', error);
//         res.status(500).json({error: 'Internal Server error'})
//     } else {
//         console.log(' Data saved succesfully');
//         res.status(200).json(savedPerson);
//     }
// })


});

//Get Method

app.get('/person', async (req,res) => {
    try{
        const data = await Person.find();
        console.log('Data Fetched')
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }

})






app.listen(3000, () => {
    console.log('Listening on port 3000');
})