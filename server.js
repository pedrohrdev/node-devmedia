const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {

  const weight = parseFloat(req.query.weight);
  const height = parseFloat(req.query.height);

  if (isNaN(weight) || isNaN(height)) {
    return res.send('Please submit valid weight and height values ​​as query parameters!');
  }

  const imc = weight / (height * height);


  // Response in JSON
  res.json(
    {
        imc: imc.toFixed(2)
    }
  );
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});