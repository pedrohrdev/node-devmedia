import express from 'express';
const app = express();

import historicoInflacao from './data/data.js';


// The first API route should return the entire collection of application data.
app.get('/historicoIPCA', (req, res) => {

    res.json(historicoInflacao);

});


// The second API route should return a data history of the collection, referring to a specific year.
app.get('/historicoIPCA/ano', (req, res) => {

    let ano = Number(req.params.ano);

    if (isNaN(ano)) {
        return res.status(404).json({erro: 'Ano invalido'})
    }

    let specificYear = historicoInflacao.filter(specificYear => specificYear.ano === ano);

    res.json(specificYear)

});


// The third API route should return an element from the collection, according to the element's identification code (id).
app.get('/historicoIPCA/id/:id', (req, res) => {

    let id = Number(req.params.id);

    if(isNaN(id)) {
        return res.status(404).json({error: 'id invalido'});
    };

    let specificItem = historicoInflacao.find(item => item.id  === id);

    res.json(specificItem);

})



app.listen(8080, () => {
    console.log('API runing on port 8080')
})  