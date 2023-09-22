const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = 8000;
require('./database');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.set('port', port); // Correção: Defina a porta usando app.set

//ROTAS

app.use('/salao', require('./src/routes/salao.routes'))



app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});


