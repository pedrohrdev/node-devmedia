import express from 'express';
const app = express();

import historicoInflacao from './data/data.js';


// The first API route should return the entire collection of application data.
app.get('/historicoIPCA', (req, res) => {

    res.json(historicoInflacao);

});



app.listen(8080, () => {
    console.log('API runing on port 8080')
})