const getIMCStatus = (imc) => {
  if (imc < 18.5) {
    return 'Underweight';
  }

  if (imc >= 18.5 && imc < 25) {
    return 'Normal weight';
  }

  if (imc >= 25 && imc < 30) {
    return 'Overweight';
  }

  return 'Obese';
};

module.exports = {
  getIMCStatus
}