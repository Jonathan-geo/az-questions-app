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



//require('./src/routers')(app, db, diret);

require('./src/routers/mainrouters')(app, db, diret);
require('./src/routers/simulados')(app, diret);
//require('./src/routers/verrrrr')(app, diret);




//PAGE ERROR 
app.use((req, res, next)=>{
  var err = new Error('PAGE NOT FOUND');
  err.status = 404;
  next(err);
});


//HANDLING ERROR
app.use((err, req, res, next ) => {
  res.status(err.status || 500);
  res.send(err.message)
});














//****JSON-EXEMPLO****/
const users = [
  {name: 'Jones', email: 'jones@gmail.com'},
  {name: 'Henrique', email: 'henrique@hotmail.com'},
]

//****RENDER-API-JSON-REQUIRED****/
app.get('/users', (req, res) => {
  res.json(users)
  //res.send(users)  também funciona
})


app.post('/users/post', (req, res) => {
  users.push(req.body);
  console.log(req.body);
  res.json({ status: 'User created successfully!' });
})














const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

