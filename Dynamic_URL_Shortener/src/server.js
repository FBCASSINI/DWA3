const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//var util = require('./util.js');
//call random gen - return string with 9 length.

//var output = util.stringGen(9);

//console.log(output);

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,

}));

app.use('/', require('./routes')(express));

const server = app.listen(port, () =>  {
        console.log('Server Active On', port);
    });
