const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Frame con Botones</title>
      <meta property="og:title" content="Frame Dinámico con Botones" />
      <meta property="og:description" content="Un frame con botones dinámicos para navegación mensual." />
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
      <h1>Frame con Botones</h1>
      <div id="buttonContainer">
        <!-- Botones iniciales -->
        <button onclick="alert('Enero')">Enero</button>
        <button onclick="alert('Febrero')">Febrero</button>
        <button onclick="alert('Marzo')">Marzo</button>
        <button onclick="alert('Siguiente')">Siguiente</button>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
