const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
});

var cb0 = function (req, res, next) {
    console.log('CB0')
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C2!');
}

app.get('/example/c', [cb0, cb1, cb2]);

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    });


var birds = require('./birds');
app.use('/birds', birds);

const server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});