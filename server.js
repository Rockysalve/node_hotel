const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send('Hello World node js ')
})






//Import the router files
const personRoutes = require('./routes/personRoutes'); //For Person CRUD operations in MongoDB using Nodejs and Express framework.
const menuItemRoutes = require('./routes/menuItemRoutes'); //For Menu Item CRUD operations in MongoDB using Nodejs and Express framework.

//Use the routers
app .use('/person',  personRoutes);
app .use('/menu',  menuItemRoutes);


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
})
