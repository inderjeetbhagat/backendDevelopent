const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // store in req.body
const PORT = process.env.PORT || 3000;



const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');
const Task = require('./models/Task');

//middleware function
const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} Request made to : ${req.originalUrl}`)
    next();
}

passport.use(new localStrategy(async (USERNAME, password, done) => {
    try{
console.log('Received Cred:', USERNAME, password);
const user = await Person.findOne({
    username: USERNAME
});
if(!user) {
    return done(null, false,{message: 'Incorrect username'});
} 

const isPasswordMatch = user.password === password ? true: false;

if(isPasswordMatch){
    return done(null,user);
} else {
    return done(null, false, {message: 'Incorrect password'})
}
    }catch(err){
        return done(err);    }
}))

app.use(passport.initialize());

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
app.use(logRequest);
app.get('/', passport.authenticate('local',{session: false}), (req, res) => {
    res.send('Welcome to the hotel! How can I help you');
});








//Get Method





//importing router file

const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use('/menu', menuRoutes)
app.use('/person',personRoutes)


app.listen(PORT, () => {
    console.log('Listening on port 3000');
})