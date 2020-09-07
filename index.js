const express = require('express');
const path = require('path');
//const generatePassword = require('password-generator');

const app = express();

// Serve static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(__dirname+'/src/public'));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.get('/result',function(req,res){
  res.sendFile(path.join(__dirname+'/src/result.html'));
  //__dirname : It will resolve to your project folder.
});

/*
router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

*/












/*

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

*/






/*
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});




*/
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

