const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


require('../models/Pontuacao');
const Pontuacao = mongoose.model("pontuacaos")


const {eAuth} = require('../helpers/eAuth');


router.get('/', eAuth, (req, res)=>{
    res.render("index", {nomeLogado: req.user.nome})
})
  

router.post('/pontuacao', eAuth, (req, res)=>{

    let errosList = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        errosList.push({texto: "Nome inválido"})
    }

    if(req.body.nome.length < 2 && req.body.nome.length > 0){
        errosList.push({texto: "O nome precisa ter mais de 2 caracteres"})
    }

    if(errosList.length > 0){
        res.render("admin/addcategorias", {erros: errosList})
    }else{

        const novaPontuacao = {
            nome: req.body.nome,
            data: req.body.data,
            simulado: req.body.simulado,
            acerto: req.body.acerto,
            erro: req.body.erro
        }
    
        //console.log(novaPontuacao);
        
        new Pontuacao(novaPontuacao).save()
            .then(()=>{
                req.flash("success_msg", "Pontuação inserida com Sucesso!")
                res.redirect("/")
            })
            .catch((err)=>{
                req.flash("error_msg", "Houve um erro ao salvar a sua pontuação, tente novamente!")
                res.redirect("/")
            })


    }

})


module.exports = router;
