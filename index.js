const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Frame Dinámico</title>
      <meta property="og:title" content="Frame Dinámico con Botones" />
      <meta property="og:description" content="Un frame con botones dinámicos para navegación mensual." />
      <meta property="og:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
    </head>
    <body>
      <h1>Frame con Botones Dinámicos</h1>
      <div id="buttonContainer"></div>
      <script>
        const months = [
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        function updateButtons() {
          const container = document.getElementById('buttonContainer');
          container.innerHTML = '';  // Clear existing buttons
          months.forEach(month => {
            const buttonHTML = '<button onclick="alert(\\'' + month + '\\')">' + month + '</button>';
            container.innerHTML += buttonHTML;
          });
        }

        window.onload = updateButtons;  // Call updateButtons on page load
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
