const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['Urgent', 'Not Urgent'],
        required: true
    },
    dueDate: {
        type: Date
    }
});

// const Person = mongoose.model('Person', personSchema);
const Task = mongoose.model('Task', taskSchema );
module.exports = Task;