const express = require('express');
const app = express();
const port = 3000;

// Inicializa los botones
let currentButtons = [
  { label: "Opción 1", action: "action1" },
  { label: "Opción 2", action: "action2" },
  { label: "Opción 3", action: "action3" },
  { label: "Opción 4", action: "action4" }
];

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Dynamic Frame Example</title>
      
      <!-- Open Graph Tags -->
      <meta property="og:image" content="https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080" />
      <meta property="og:title" content="Dynamic Frame Example" />
      <meta property="og:description" content="Este es un ejemplo de un frame dinámico en Farcaster." />

      <!-- Farcaster Tags -->
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080" />
      
      ${currentButtons.map((button, index) => `
        <meta property="fc:frame:button:${index + 1}" content="${button.label}" />
        <meta property="fc:frame:button:${index + 1}:action" content="link" />
        <meta property="fc:frame:button:${index + 1}:target" content="https://www.example.com/${button.action}" />
      `).join('')}
    </head>
    <body>
      <h1>Dynamic Frame Example</h1>
      <script>
        function updateButtons(newButtons) {
          fetch('/update-buttons', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newButtons)
          })
          .then(response => response.json())
          .then(data => {
            console.log('Buttons updated:', data);
            location.reload(); // Recarga para ver los cambios
          });
        }

        // Ejemplo de cambio de botones al hacer clic
        document.addEventListener('click', function(event) {
          if (event.target.tagName === 'BUTTON') {
            const newButtons = [
              { label: "Nueva Opción 1", action: "newAction1" },
              { label: "Nueva Opción 2", action: "newAction2" }
            ];
            updateButtons(newButtons);
          }
        });
      </script>
      <button>Change Buttons</button>
    </body>
    </html>`
  );
});

// Ruta para actualizar los botones
app.post('/update-buttons', (req, res) => {
  currentButtons = req.body;
  res.json({ message: 'Buttons updated successfully!' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
