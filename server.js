const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.json({mensagem: 'teste'})

});


app.listen(8080, () => {

    console.log('Servidor rodando na porta 8080')

});
