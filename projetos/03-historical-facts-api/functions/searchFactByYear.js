const historicalFacts = require('../data/historicalFacts');

function searchFactByYear(year) {

    const numYear = parseInt(year, 10);

    const fact = historicalFacts.find(item => item.year === numYear);

    return fact ? fact : null

}

module.exports = { searchFactByYear };