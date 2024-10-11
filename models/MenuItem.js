const mongoose = require('mongoose');

// Define the Person Schema
const menuItemSchema = new mongoose.Schema({

   name:{
    type: String,
     required: true,
   },

   price:{
    type: Number,
     required: true,
   },

   taste:{
    type: String,
    enum: ['Sweet', 'Salty','Spicy'],
     required: true,
   },
   
   is_drink:{
    type: Boolean,
    default: false
   },

   ingredients:{
    type:[String],
    default:[]
  },
  
  num_sales:{

    type: Number,
    default: 0,
  },

})

//Create Person model

const MenuItem  = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
