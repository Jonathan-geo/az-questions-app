const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname+'/src/public'));

const path = require('path');
const diret = path.join(__dirname);


var db = new sqlite3.Database('./src/database/historico.db');



require('./src/routers/mainrouters')(app, db, diret);
require('./src/routers/simulados')(app, diret);
require('./src/routers/ApiExemplo')(app);
require('./src/routers/RotasErros')(app);


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

