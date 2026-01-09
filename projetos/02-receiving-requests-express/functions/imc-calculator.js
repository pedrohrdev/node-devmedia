const performIMCCalculation = (weight, height) => {
    let imc = weight / (height ** 2);
    return imc
};

module.exports = {
    performIMCCalculation
};