module.exports = function (app, path) {
    

    /******HOME PAGE******/
    app.get('/',function(req,res){
        res.sendFile(path+'/src/index.html');
    });
    



    /******API - NOME******/
    app.get("/historico/:nome", (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      var data = req.params.nome;
      console.log(data);
    });
    


    //******PAGINA DO HISTÓRICO****/
    app.get('/historico',function(req,res){
        res.sendFile(path+'/src/views/historico.html');
    });

    

    //*********INSERIR PONTUAÇÂO**********/
    app.post('/historico', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        var data = req.body;

        console.log(data);

        res.redirect("/");
    });




};