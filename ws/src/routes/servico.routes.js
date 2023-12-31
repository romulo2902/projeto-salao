const express = require('express');
const router = express.Router();
const Salao = require('../models/salao');
const Servicos = require('../models/servico');


router.post('/',async(req, res) => {
try{
const salao = await new Salao(req.body).save();
res.json({salao});
} catch (err) {
res.json({erro: true, message: err.message})
}
});

module.exports = router;