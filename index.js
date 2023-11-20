const express = require('express');
const cors = require('cors');
const connection = require('./configs/db');
const userRouter = require('./routes/user.routes');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send({msg: 'Welcome to Now_Digital_Easy Assignment'})
})

app.use('/api', userRouter);

app.listen(process.env.PORT || 8080, ()=>{
    connection();
    console.log(`App is running on port: ${process.env.PORT}`)
})