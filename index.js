const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Dynamic Button Frame</title>
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
