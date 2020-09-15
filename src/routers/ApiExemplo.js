module.exports = function (app) {
    
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
  

};