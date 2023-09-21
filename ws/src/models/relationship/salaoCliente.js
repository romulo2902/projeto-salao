const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const salaocliente = new Schema ({

    salaoId:{ 
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required:true,
    },
    
    
    ClienteId:{ 
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
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

module.exports = mongoose.model('SalaoCliente',salaocliente);