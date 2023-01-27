const express = require('express');
const mongoose = require('mongoose');
const router = require('./Route/routes');

const app=express();

app.use(express.json());
app.use('/api',router);

app.listen(3000,()=>{
        console.log('Server started at 3000')
}) 

