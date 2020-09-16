

module.exports = function(app, path) {

    app.get('/historico',function(req,res){
        res.sendFile(path+'/src/views/historico.html');
    });


    //****SIMULADO-1****/
    app.get('/simulado1',function(req,res){
        res.sendFile(path+'/src/views/simulado1.html');
    });

    //****SIMULADO-2****/
    app.get('/simulado2',function(req,res){
        res.sendFile(path+'/src/views/simulado2.html');
    });

    //****SIMULADO-3****/
    app.get('/simulado3',function(req,res){
        res.sendFile(path+'/src/views/simulado3.html');
    });
        
};