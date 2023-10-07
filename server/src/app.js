const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'})

require('./db/conn')
app.use(express.json());

const Voter = require('./models/voter.model')

const PORT = process.env.PORT;


app.use(require('./router/voter.auth'));



app.listen(PORT , ()=>{
    console.log(`server is running at ${PORT}`);
})

