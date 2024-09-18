const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Frame con Botones Dinámicos y Cambio de Imágenes</title>
      <meta property="og:title" content="Frame Dinámico" />
      <meta property="og:description" content="Un frame con botones dinámicos para navegación mensual y cambio de imágenes." />
      <meta property="og:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
      <meta property="fc:frame:post_url" content="https://frame101.vercel.app/" />
      <style>
        button {
          margin: 5px;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <h1>Frame con Botones Dinámicos y Cambio de Imágenes</h1>
      <div id="buttonContainer">
        <!-- Los botones se generan dinámicamente aquí -->
      </div>
      <script>
        let currentStage = 0;
        const months = [
          { name: 'Enero', image: 'https://example.com/image-enero.jpg' },
          { name: 'Febrero', image: 'https://example.com/image-febrero.jpg' },
          { name: 'Marzo', image: 'https://example.com/image-marzo.jpg' },
          { name: 'Abril', image: 'https://example.com/image-abril.jpg' },
          { name: 'Mayo', image: 'https://example.com/image-mayo.jpg' },
          { name: 'Junio', image: 'https://example.com/image-junio.jpg' },
          { name: 'Julio', image: 'https://example.com/image-julio.jpg' },
          { name: 'Agosto', image: 'https://example.com/image-agosto.jpg' },
          { name: 'Septiembre', image: 'https://example.com/image-septiembre.jpg' },
          { name: 'Octubre', image: 'https://example.com/image-octubre.jpg' },
          { name: 'Noviembre', image: 'https://example.com/image-noviembre.jpg' },
          { name: 'Diciembre', image: 'https://example.com/image-diciembre.jpg' }
        ];

        function updateButtons(action) {
          const container = document.getElementById('buttonContainer');
          if (action === 'next' && currentStage < 3) {
            currentStage++;
          } else if (action === 'back' && currentStage > 0) {
            currentStage--;
          } else if (typeof action === 'string') {
            alert('URL de la imagen para ' + action + ': ' + months.find(m => m.name === action).image);
            return;
          }

          container.innerHTML = '';
          if (currentStage > 0) {
            container.innerHTML += '<button onclick="updateButtons(\'back\')">Regresar</button>';
          }

          const start = currentStage * 3;
          const end = start + 3;
          months.slice(start, end).forEach(month => {
            container.innerHTML += '<button onclick="updateButtons(\'' + month.name + '\')">' + month.name + '</button>';
          });

          if (currentStage < 3) {
            container.innerHTML += '<button onclick="updateButtons(\'next\')">Siguiente</button>';
          }
        }

        document.addEventListener('DOMContentLoaded', function() {
          updateButtons('init'); // Inicializa los botones al cargar
        });
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
