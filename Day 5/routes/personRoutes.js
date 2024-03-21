const express = require('express');
const router = express.Router();
const Person = require('../models/person');


router.get('/', async (req,res) => {
    try{
        const data = await Person.find();
        console.log('Data Fetched')
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }

})

router.get('/:workType', async (req, res) => {
   try{
    const workType = req.params.workType;
    
    if( workType == 'chef' || workType == 'waiter' || workType == 'waiter' ) {
         const response = await Person.find({work: workType});
         console.log('response fetched');
         res.status(200).json(response);
    } else {
        res.status(404).json({error: 'Invalid work type'});
    }
   }catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
   }
})
router.post('/', async (req,res) =>{

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
router.put('/:id', async (req,res) =>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body; 

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        })

        if(!response) {
            res.status(404).json({error: 'Person not found'})
        }
        console.log('data updated')
        res.status(200).json(response);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});

    }
});

router.delete(':/id', async (req, res) => {
    try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if(!response) {
            res.status(404).json({error: 'Person not found'})
        }
        console.log('data deleted')
        res.status(200).json({message: 'Person deleted successfully'});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})


module.exports = router;
