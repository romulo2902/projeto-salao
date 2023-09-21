const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 8000;
require('./database');

app.use(morgan('dev'));

app.set('port', port); // Correção: Defina a porta usando app.set

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});


