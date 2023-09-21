const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const cliente = new Schema ({
    nome: {
        type:String,
        required: [true, 'Nome é obrigatório.']
    },

    telefone: {
        type:String,
        required: [true, 'Telefone é obrigatório.']
    },

    email: {
        type:String,
        required: [true, 'Email é obrigatório.']
    },
    senha: {
        type:String,
        required:true,
    },
    
    foto:  {
        type:String,
        required:true,
    },
    

    dataNascimento:{
        type:String,
        required:true,
    },

    sexo:{
        type:String,
        enum: ['M', 'F'],
        required:true,
    },

    status: {
        type:String,
        enum: ['A', 'I', 'E'],
        required:true,
        dafault: 'A'
    },

    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: Number,
        pais: String,
     },

     documento:{
        tipo:{
            type:String,
            enum:['individual','corporation'],
        required:true,
    },
        numero: {
            type:String,
        required:true,
    },
        },
     
    dataCadastro:{
        type:Date,
        default:Date.now,
    },
    
    });
    
    module.exports = mongoose.model('Cliente',cliente);
