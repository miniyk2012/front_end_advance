const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.post('/addMovie', addMovie);
const data = [];

function addMovie(req, res) {
    console.log(req.body)
    data.push(req.body)
    res.send(data);
}
const port = 3000;
const server = app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});