import { serchFactByYear } from './functions/SearchFactByYear';
const express = require('express');
const app = express();

app.get('/', (req, res) => {

    let factYear = req.query.year;

    let fact = serchFactByYear(factYear);

    res.json({year: fact})

});


app.listen(8080, () => {

    console.log('Server running on 8080')

});
