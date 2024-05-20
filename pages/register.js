const userAdd = require('../database/register.js');
const express = require('express');
const path = require('path');
const app = express.Router();

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../public/pages/register.html'));
});

app.get('/addUser', (req, res) => {
    body = JSON.parse(req.body);
    try{
        userAdd(body.username, body.email, body.password);
        res.send("User added");
    }catch(err){
        res.send("User not added");
    }
});

module.exports = app;