let data = require('./data/data');

function returnMessageDay(day) {
    return data.frases[day - 1]
};

exports.returnMessageDay = returnMessageDay;