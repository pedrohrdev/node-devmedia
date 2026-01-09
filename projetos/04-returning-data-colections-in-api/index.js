import express from 'express';
const app = express();

import colecaoUf from './data/data.js';

const buscarUFsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
}

// Setting the ufs endpoint;
app.get('/ufs', (req, res) => {
    
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUFsPorNome(nomeUf) : colecaoUf;

    if(resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(400).send({"erro": "Nenhuma UF encontrada"})
    }

});

// Setting endpoint for return one element of list;
app.get('/ufs/:iduf', (req, res) => {

    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!i(isNaN(idUF))) {
        uf = colecaoUf.find(u => u.id === idUF);
        if(!uf) {
            mensagemErro = 'UF nao encontrada';
        }
    } else {
        mensagemErro = 'Requisicao invalida'
    };

    if(uf) {
        res.json(uf)
    } else {
        res.status(400).send();
    }

    res.json(uf)

});



app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});