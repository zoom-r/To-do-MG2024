const express = require('express');
const path = require('path');
var fs = require('fs');
const app = express();
const port = 3000;

//add static files
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import Routes
const register = require('./pages/register.js');
const login = require('./pages/login.js');

//implement Routes
app.use('/register', register);
app.use('/login', login);

app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, 'public/pages/404.html'));
});

app.listen(port, () => { console.log('Server listening at port ' + port)});