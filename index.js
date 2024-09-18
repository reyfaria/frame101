const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>My Node.js App with Custom Meta Tags</title>
      <meta property="og:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
      <meta property="fc:frame:button:1" content="Spec" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://www.farcaster.xyz/reflect/frame101?content=constructing-a-frame" />
      <meta property="fc:frame:button:2" content="Image" />
      <meta property="fc:frame:button:2:action" content="link" />
      <meta property="fc:frame:button:2:target" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
      <meta property="fc:frame:button:3" content="Frame Validator" />
      <meta property="fc:frame:button:3:action" content="link" />
      <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames" />
      <meta property="fc:frame:button:4" content="Replit" />
      <meta property="fc:frame:button:4:action" content="link" />
      <meta property="fc:frame:button:4:target" content="https://replit.com/@VarunSrinivas4/FrailStridentDisc#index.js" />
    </head>
    <body>
      <h1>Welcome to My Node.js App with Custom Meta Tags!</h1>
      <div id="buttonContainer"></div>
      <script>
        let currentStage = 0;
        const months = [
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        function updateButtons() {
          const container = document.getElementById('buttonContainer');
          container.innerHTML = '';
          // Mostrar botón Regresar si no estamos en la primera etapa
          if (currentStage > 0) {
            container.innerHTML += '<button onclick="navigate(-1)">Regresar</button>';
          }
          // Mostrar tres botones de mes o menos si estamos al final de la lista
          for (let i = 0; i < 3 && currentStage * 3 + i < months.length; i++) {
            let monthIndex = currentStage * 3 + i;
            container.innerHTML += '<button onclick="alert(\'Seleccionaste ' + months[monthIndex] + '\')">' + months[monthIndex] + '</button>';
          }
          // Mostrar botón Siguiente si no estamos en la última etapa
          if (currentStage < 3) {
            container.innerHTML += '<button onclick="navigate(1)">Siguiente</button>';
          }
        }

        function navigate(direction) {
          currentStage += direction;
          updateButtons();
        }

        document.addEventListener('DOMContentLoaded', updateButtons);
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
