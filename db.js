const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,  // Corrected this line
    useUnifiedTopology: true
});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Uncomment this if you want to export the connection
 module.exports = db;
