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
      <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrzL3oz4tuE0H525SnCXN6Xf57dyIfsUWbA&usqp=CAU" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrzL3oz4tuE0H525SnCXN6Xf57dyIfsUWbA&usqp=CAU" />

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
        <button onclick="updateButtons(1)">Enero</button>
        <button onclick="updateButtons(2)">Febrero</button>
        <button onclick="updateButtons(3)">Marzo</button>
        <button onclick="updateButtons('next')">Siguiente</button>
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
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
