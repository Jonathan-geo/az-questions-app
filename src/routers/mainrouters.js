module.exports = function (app, path) {
    

    /******HOME PAGE******/
    app.get('/',function(req,res){
        res.sendFile(path+'/src/index.html');
    });
    
};