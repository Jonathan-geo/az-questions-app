module.exports = function (app, db, path) {
    

    /******HOME PAGE******/
    app.get('/',function(req,res){
        res.sendFile(path+'/src/index.html');
    });
    


    /******API - DATA******/
    app.get('/api', (req, res) => {
        processData(res, "SELECT * FROM thistorico");
    });



    /******API - NOME******/
    app.get("/historico/:nome", (req, res) => {
      //res.setHeader("Access-Control-Allow-Origin", "*");
      var data = req.params.nome;
      processData2(res, "SELECT * FROM thistorico WHERE nome = '"+data+"'")
    });
    


    //******PAGINA DO HISTÓRICO****/
    app.get('/historico',function(req,res){
        res.sendFile(path+'/src/views/historico.html');
    });

    

    //*********INSERIR PONTUAÇÂO**********/
    app.post('/historico', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        var data = req.body;

        //console.log(data);
        insertProduct(data, res, db);

        res.redirect("/");
    });


    function processData2(res, sql){
        db.serialize(function() {
            db.all(sql, 
            function(err, rows) {
                if(err){
                console.error(err);
                res.status(500).send(err);
                }
                else
                sendData2(res, rows, err);
            });
        });
    }

    function sendData2(res, data, err){
        res.setHeader("Access-Control-Allow-Origin","*");
        if(data[0]){
            //res.redirect("/home");
            res.send(data);
            } else{
            res.send("Not found");
        }
    }



    function processData(res, sql){
        db.serialize(function() {
            db.all(sql, 
            function(err, rows) {
                if(err){
                console.error(err);
                res.status(500).send(err);
                }
                else
                sendData(res, rows, err);
            });
        });
    }

    function sendData(res, data, err){
        res.setHeader("Access-Control-Allow-Origin","*");
        if(data[0]){
            //res.redirect("/home");
            res.send(data);
            } else{
            res.redirect("/");
        }
    }




    function insertProduct(product, res, db){
        var novoNome = product.nome;
        var novaData = product.data;
        var navoAcertos = parseInt(product.acerto);
        var navoErros = parseInt(product.erro);

        var sql = `INSERT INTO thistorico (nome, tdata, acerto, erro) VALUES (?, ?, ?, ?);`;

        var values = [novoNome, novaData, navoAcertos, navoErros];

        db.serialize(function () {
            db.run(sql, values, function (err) {
                if (err){
                    console.error(err);
                    res.status(500).send(err);
                }
                    
                else
                    res.send();
            });
        });
    }
};