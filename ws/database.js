const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://salaoUser:oiTydFzvohD5Y1q0@clusterdev.wdbyasq.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, // Remova esta linha
  useUnifiedTopology: true, // Adicione esta linha
});

mongoose.connection.on('connected', () => {
  console.log('Conectado ao MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Erro na conexão com o MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Desconectado do MongoDB');
});
