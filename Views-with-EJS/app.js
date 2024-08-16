// install required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// create an Express app
const app = express();
// configure the port where our server will listen for incoming requests
const port = 3001;

// configure EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev')); // logging middleware
app.use(bodyParser.json()); // JSON parsing middleware

// serve static files from the public directory
app.use(express.static('public'));

// define routes
app.get('/', (req, res) => {
    res.render('index', {
        time: new Date().toString()
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});