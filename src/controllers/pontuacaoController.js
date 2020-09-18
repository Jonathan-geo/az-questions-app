module.exports = function (app) {

    const Pontuacao = require('../models/Pontuacao');

    app.post('/pontuacao', async (req, res) => {
        try{
            //console.log(req.body);
            await Pontuacao.create(req.body);
            return res.redirect("/");
        }catch (err){
            return res.status(400).send({error: 'Falha no registro de dados'});
        }
        
    })

    app.get('/pontuacao/api', async (req, res) => {
        try{
            let dados = await Pontuacao.find({});
            return res.send(dados);
        }catch (err){
            return res.redirect("/");
            //return res.status(400).send({error: 'Falha no registro de dados'});
        } 
        
    })

    app.get('/pontuacao/api/:nome', async (req, res) => {
        try{
            
            let dados = await Pontuacao.find({ nome: req.params.nome });
            return res.send(dados);
        }catch (err){
            return res.redirect("/");
            //return res.status(400).send({error: 'Falha no registro de dados'});
        } 
        
    })




}
