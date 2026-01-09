const express = require('express');
const app = express();
const PORT = 8080;

const { performIMCCalculation } = require('./functions/imc-calculator');
const { getIMCStatus } = require('./functions/imc-status');


app.get('/', (req, res) => {

  const weight = parseFloat(req.query.weight);
  const height = parseFloat(req.query.height);

  if (isNaN(weight) || isNaN(height)) {
    return res.send('Please submit valid weight and height values ​​as query parameters!');
  }

  let imc = performIMCCalculation(weight, height);
  let status = getIMCStatus(imc);

  // Response in JSON
  res.json(
    {
        imc: imc.toFixed(2),
        status: status,
    }
  );
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});