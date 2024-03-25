const mongoose = require('mongoose');
require('dotenv').config();

//Define the mongoDB connection URL

const mongoURL = 'mongodb://127.0.0.1:27017/hotels' //Replace 'mydatabase with your database name

// const mongoURL = process.env.DB_URL;

//set up MongoDB connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//GEt the default connection
//Mongoose maintian a default connection object representing the MongoDB connection.

const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) =>{
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

//export database connection
module.exports = db;

