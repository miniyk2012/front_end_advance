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

app.get('/home', function (req, res) {
    res.send('Hello World!');
});

app.get('/files/', function (req, res) {
    res.send('Files');
});
const appData = {
    name: 'yangkai',
}
app.get('/all', function (req, res) {
    res.send(appData)
  })
  
app.use(express.static('landing-page'));

const server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});



console.log(server);
console.log('xxx');
