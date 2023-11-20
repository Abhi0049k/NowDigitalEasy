const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI

const connection = async()=>{
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('Connection established with the DB');
    }catch(err){
        console.log('Something went wrong while establishing connection with DB');
    }
}

module.exports = connection;
