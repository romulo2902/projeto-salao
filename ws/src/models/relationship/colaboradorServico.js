const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema ({

    ColaboradorId:{ 
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required:true,
    },

   servicoId:{ 
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required:true,
    },

    status: {
        type:String,
        enum: ['A', 'I', 'E'],
        required:true,
        dafault: 'A'
    },
   
dataCadastro:{
    type:Date,
    default:Date.now,
},

});

module.exports = mongoose.model('ColaboradorServico',colaboradorServico);