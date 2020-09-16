const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname+'/src/public'));

const path = require('path');
const diret = path.join(__dirname);


require('./src/controllers/pontuacaoController')(app);
require('./src/routers/mainrouters')(app, diret);
require('./src/routers/simulados')(app, diret);
require('./src/routers/RotasErros')(app);


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

