// Here we shall require express and have routes for our api and html

const express = require('express');
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// initialize app and make port 3000

const app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

// I think next step is middleware for route, parse, and static.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/html', htmlRoute);

// this starts server with port 3000

app.listen(3000, function () {
	console.log('Listening on port 3000');
});
