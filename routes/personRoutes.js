const express = require('express');
const router = express.Router();

const Person = require('./../models/Person');

// POST route to add a person
router.post('/', async (req, res)=>{

  try {
    const data = req.body// assuming the request body contains the person data

//Create a new Person document using the Mongoose model
const newPerson = new Person(data);

//Save the person to the database
 const response = await newPerson.save();
 console.log('data saved');
 res.status(200).json(response);
    
  }
   catch (err) {
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
    
  }
})

//GET method to get the person

router.get ('/', async (req, res)=>{

  try{
    const data = await Person.find();
    console.log('person fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error 2'});
  }
})


router.get('/:workType', async(req, res) =>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
      const response = await Person.find({work: workType});
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



   router.put ('/:id', async (req, res)=>{

  try{
    const personId = req.params.id;  //Extract the id from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new:true, //Return the updated document
      runValidators: true, // Run Mongoose validation

    })

    if(!response) {
      return  res.status(404).json({error:'Internal Server Error'}); //
    }
    console.log('data updated');
    res.status(200).json(response); //Return the response to the client with a 200 status code and the person data in JSON format as the body of the HTTP response message.  //

  }
  catch(err){ 
    	console.log(err);
     		res.status(500).json({error:'Internal Server Error'});
      }

    })


    router.delete('/:id', async (req, res)=>{  //Extract the id from the URL parameter and delete the person document with that ID from the database using Mongoose findByIdAndDelete method. //Return a response to the client with a 200 status code indicating success. //

        try{
             const personId = req.params.id;

             const response = await Person.findByIdAndDelete(personId);
             //Return a response to the client with a 200 status code indicating success. //
             if(!response) {
              return res.status(404).json({error:'Person Not found'});
             }
             console.log('data deleted');
             res.status(200).json({message: 'person Deleted Successfully'});  //Return a response to the client with a 	200 status code indicating success. //
        }
         catch(err){
          console.log(err);
          res.status(500).json({error:'Internal Server Error'});
         }
    })


module.exports = router;