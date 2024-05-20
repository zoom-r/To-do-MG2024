const userAdd = require('../database/register');
const express = require('express');
const path = require('path');
const app = express.Router();

app.get('/', (req, res)=>{
    console.log(userAdd());
    res.sendFile(path.resolve(__dirname, '../public/pages/register.html'));
});

app.post('/', (req, res) => {
    
});

module.exports = app;