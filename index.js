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



require('./src/routers/RotasPrincipais')(app, diret);
require('./src/routers/Simulados')(app, diret);
require('./src/routers/ApiExemplo')(app);
require('./src/routers/RotasErros')(app);
require('./src/controllers/pontuacaoController')(app);


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);