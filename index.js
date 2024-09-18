const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Test de Botones Dinámicos</title>
      <meta property="og:title" content="Frame Dinámico con Botones" />
      <meta property="og:description" content="Un frame con botones dinámicos para navegación mensual y cambio de imágenes." />
      <meta property="og:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
      <meta property="fc:frame:post_url" content="https://frame101.vercel.app/" />
      <style>
        button {
          margin: 5px;
          padding: 10px;
          display: block;
        }
      </style>
    </head>
    <body>
      <h1>Test de Botones Dinámicos</h1>
      <div id="buttonContainer"></div>
      <p id="log"></p>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const container = document.getElementById('buttonContainer');
          container.innerHTML = '<button onclick="showMessage(\'Botón Funciona!\')">Click Me!</button>';
          document.getElementById('log').innerHTML = 'JavaScript se está cargando correctamente.';
        });

        function showMessage(message) {
          const log = document.getElementById('log');
          log.innerHTML += '<br>' + message;
          alert(message);
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
