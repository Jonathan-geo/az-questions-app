const express = require('express');
const router = express.Router();

const {eAuth} = require('../helpers/eAuth');

router.get('/az01', eAuth, (req, res)=>{
    res.render("simulados/simulado1")
})

router.get('/az02', eAuth, (req, res)=>{
    res.render("simulados/simulado2")
})

router.get('/az03', eAuth, (req, res)=>{
    res.render("simulados/simulado3")
})

router.get('/az04', eAuth, (req, res)=>{
    res.render("simulados/simulado4")
})

module.exports = router;