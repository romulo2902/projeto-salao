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

router.get('/servicos/:salaoId',async(req, res) => { 

    try{
        const { salaoId } = req.params;
        const servicos = await Servicos.find({
            salaoId,
            status: 'A'
        }).select('_id titulo');
        /* [{label:'Serviço', value: '89898988'}]*/
        res.json({
            servicos: servicos.map(s => ({label: s.titulo ,value: s._id }))
        });


        } catch (err) {
        res.json({erro: true, message: err.message})
        }

});


module.exports = router;