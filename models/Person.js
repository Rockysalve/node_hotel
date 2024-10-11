const mongoose = require('mongoose');

// Define the Person Schema
const personSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number
  },
  work:{
    type:String,
    enum: ['chef', 'waiter', 'manager'],
    required:true
  },
  mobile:{
    type:String,
    required:true
  },
  email:{

    type: String,
    unique: true,
    required:true
  },
  address:{
    type:String
  },
  salary:{
    type:Number,
    required:true

}

});

//Create Person model

const Person  = mongoose.model('Person',personSchema);
module.exports = Person;

