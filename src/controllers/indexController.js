module.exports = function (app, diretorio) {

    /******HOME PAGE******/
    app.get('/', async (req,res) => {
        res.sendFile(diretorio+'/src/index.html');
    });

    app.get('/historico', async (req,res) => {
        res.sendFile(diretorio+'/src/views/historico.html');
    });

    //****SIMULADO-1****/
    app.get('/simulado1', async (req,res) => {
        res.sendFile(diretorio+'/src/views/simulado1.html');
    });

    //****SIMULADO-2****/
    app.get('/simulado2', async (req,res) => {
        res.sendFile(diretorio+'/src/views/simulado2.html');
    });

    //****SIMULADO-3****/
    app.get('/simulado3', async (req,res) => {
        res.sendFile(diretorio+'/src/views/simulado3.html');
    });

    //****SIMULADO-4****/
    app.get('/simulado4', async (req,res) => {
        res.sendFile(diretorio+'/src/views/simulado4.html');
    });

    
}