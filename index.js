const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Test de Botones Simples</title>
    </head>
    <body>
      <h1>Test de Botones Simples</h1>
      <button onclick="alert('Botón Funciona!')">Click Me!</button>
      <script>
        console.log('Si ves esto, el JavaScript se está cargando correctamente.');
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
