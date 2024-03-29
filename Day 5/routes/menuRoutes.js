const express =require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem')

router.post('/', async (req, res) =>  {
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

router.get('/', async (req,res) =>{
    try{
    const data = await MenuItem.find();
    console.log("Data Fetched");
    res.status(200).json(data);
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})


router.put('/:id', async(req,res) =>{
    try{
        const menuId = req.params.id;
        const updatedMenuData = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuId,updatedMenuData,{
            new: true,
            runValidators:true
        })

        if(!response){
            return res.status(404).json({error: 'Menu Item not found'});
        }
        console.log('Data Updated');
        res.status(200).json(response);


    }catch(err) {
console.log(err);
res.status(500).json({error: 'Internal Server Error'});

    }
})

router.delete('/:id', async (req,res) => {
    try{
        const menuId = req.params.id;
        const response = menuItems.findByIdAndRemove(menuId);
        if(!response) {
            return res.status(404).json({message: 'Data not found'});
        }
        console.log('Data Delete')
        res.status(200).json({message: 'Menu Deleted Successfully'});

    }
    catch(err){
        console.log(err)
    res.status(500).json({error: 'Internal server error'});
}
})

module.exports = router;