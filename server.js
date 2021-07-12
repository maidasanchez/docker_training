'use strict';

const express = require('express');

// constants

const PORT = 8080;
const HOST = '0.0.0.0';

//Appplication

const app = express();
app.get('/', (req, res) => {
	res.send('<h1>Homework 2 - Node JS Application</h1>');
}
);

app.get('/:name', (req, res, next) => {
	res.json({mensaje: 'Hola ' + req.params.name})
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log("DateTime:" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
