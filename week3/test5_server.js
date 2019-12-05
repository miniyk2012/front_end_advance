const express = require('express');
const app = express();

projectData = {'result': 10};

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
const server = app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// POST route
app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}

// POST an animal
const data = [];

app.post('/addAnimal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
    console.log(data);
    res.send(data);
};
