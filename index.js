const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Frame con Botones Dinámicos</title>
      <meta property="og:title" content="Frame Dinámico" />
      <meta property="og:description" content="Un frame con botones dinámicos para navegación mensual." />
      <meta property="og:image" content="https://proxy.wrpd.net/?url=https://your-image-url.com" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://proxy.wrpd.net/?url=https://your-image-url.com" />
      <meta property="fc:frame:post_url" content="https://frame101.vercel.app/" />
      <style>
        button {
          margin: 5px;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <h1>Frame con Botones Dinámicos</h1>
      <div id="buttonContainer">
        <!-- Los botones se generan dinámicamente aquí -->
      </div>
      <script>
        let currentStage = 0;
        const months = [
          ['Enero', 'Febrero', 'Marzo'],
          ['Abril', 'Mayo', 'Junio'],
          ['Julio', 'Agosto', 'Septiembre'],
          ['Octubre', 'Noviembre', 'Diciembre']
        ];

        function updateButtons(action) {
          const container = document.getElementById('buttonContainer');
          if (action === 'next') {
            currentStage++;
          } else if (action === 'back') {
            currentStage--;
          } else if (action === 'init') {
            // Configuración inicial al cargar la página
            currentStage = 0;
          }

          container.innerHTML = '';
          if (currentStage > 0) {
            container.innerHTML += '<button onclick="updateButtons(\'back\')">Regresar</button>';
          }

          months[currentStage % months.length].forEach((month, index) => {
            container.innerHTML += '<button onclick="updateButtons(' + (currentStage * 3 + index + 1) + ')">' + month + '</button>';
          });

          if (currentStage < months.length - 1) {
            container.innerHTML += '<button onclick="updateButtons(\'next\')">Siguiente</button>';
          }
        }

        // Llamada inicial para configurar los botones al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
          updateButtons('init');
        });
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
