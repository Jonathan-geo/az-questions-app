const mongooose = require('../database/dbconfig');

const PontuacaoSchema = new mongooose.Schema({
    nome: {
        type: String,
        require: true,
    },
    data: {
        type: Date,
        require: true,
    },
    simulado: {
        type: Number,
        require: true,
    },
    acerto: {
        type: Number,
        require: true,
    },
    erro: {
        type: Number,
        require: true,
    },

});


const Pontuacao = mongooose.model('Pontuacao', PontuacaoSchema);


module.exports = Pontuacao;