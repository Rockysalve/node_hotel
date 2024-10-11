const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');  



//Post method to get the  Menu Items

router.post('/', async (req, res)=>{

  try {
    const data = req.body // assuming the request body contains the menu item data
    //Create a new MenuItem document using the Mongoose model
    const newMenu = new MenuItem(data);
    //Save the menu item to the database
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);

    }
     catch (err) {
      console.log(err);
      res.status(500).json({error:'Internal Server Error in menu'});
    }
})


//Get method to get the  Menu Items

router.get('/', async (req, res) =>{
     try{
      const data = await MenuItem.find();
      console.log('menu item fetched');
      res.status(200).json(data);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error ' });
    }
})



router.get('/:tasteType', async(req, res) =>{
  try{
    const tasteType = req.params.tasteType;
    if(tasteType == 'Sweet' || tasteType == 'Salty' || tasteType == 'Spicy'){
      const response = await MenuItem.find({taste: tasteType});
      console.log('response fetched');
      res.status(200).json(response);
    }
    else{
      res.status(404).json({error:'Internal Server Error'});
    }
  }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error 4'});
    
  }
})

module.exports = router;