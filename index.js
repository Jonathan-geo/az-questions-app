const express = require('express');
const path = require('path');



const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())




app.use(express.static(__dirname+'/src/public'));

//****INDEX-HOME****/
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/index.html'));

});

//****SIMULADO-1****/
app.get('/simulado1',function(req,res){
  res.sendFile(path.join(__dirname+'/src/views/simulado1.html'));
});

//****SIMULADO-2****/
app.get('/simulado2',function(req,res){
  res.sendFile(path.join(__dirname+'/src/views/simulado2.html'));
});

//****SIMULADO-2****/
app.get('/simulado3',function(req,res){
  res.sendFile(path.join(__dirname+'/src/views/simulado3.html'));
});











//****CAMINHO-JSON****/
const caminho = path.join(__dirname+'/src/public/data/dataBase.json');

//****REQUIRE-JSON****/
var foo = require(caminho);


//****RENDER-API-JSON-REQUIRED****/
app.get('/api', (req, res) => {
    res.send(foo)
})


//VER POR QUE O MEU DADO ESTA SENDO 
//GRAVADO COMO UNDIFINED


/****REQUIRE-JSONFILE***/
const jsonfile = require('jsonfile')

/****POST-WRITE***/
app.post('/api/post', (req, res) => {
  let data = req.body;
  console.log(req.body);
  jsonfile.writeFile(caminho, data, { flag: 'a' })
    .then(res => {
      console.log('Write complete')
    })
    .catch(error => console.error(error))

  res.json({ status: 'User created successfully!' });
})

/****POST-PUSH***/ //FALTOU UM POST DO TIPO INCREMENTA 
//POIS O POST ANTERIOS SOBRESCREVE

















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

