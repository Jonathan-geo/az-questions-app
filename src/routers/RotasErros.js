module.exports = function (app) {
    
    //PAGE ERROR 
    app.use((req, res, next)=>{
        var err = new Error('PAGE NÂO EXISTENTE');
        err.status = 404;
        next(err);
    });
  
  
    //HANDLING ERROR
    app.use((err, req, res, next ) => {
        res.status(err.status || 500);
        res.send(err.message)
    });
  
  

};