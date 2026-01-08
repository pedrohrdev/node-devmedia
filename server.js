const express = require('express');
const { searchFactByYear } = require('./functions/searchFactByYear');
const { validYear } = require('./functions/validYear');

const app = express();

app.get('/', (req, res) => {

    const factYear = req.query.year;

    if(!validYear(factYear)) {
        return res.status(400).json(
            {
                error: "Invalid or missing year. Please provide a year between 1920 and 2025."
            }
        )
    }

    const fact = searchFactByYear(factYear);

    if (fact) {
        return res.json({
            year: fact.year,
            fact: fact.fact
        })
    } else {
        return res.status(404).json({
            error: 'No historical fact found the provided year'
        })
    }

});


app.listen(8080, () => {

    console.log('Server running on 8080')

});
