const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Inicializa los botones
let currentButtons = [
  { label: "Botón 1", action: "action1" },
  { label: "Botón 2", action: "action2" },
  { label: "Botón 3", action: "action3" },
  { label: "Cambiar Botones", action: "changeButtons" } // Este botón cambiará los otros
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

        // Cambia los botones al hacer clic en el cuarto botón
        document.addEventListener('click', function(event) {
          if (event.target.textContent === 'Cambiar Botones') {
            const newButtons = [
              { label: "Nuevo Botón 1", action: "newAction1" },
              { label: "Nuevo Botón 2", action: "newAction2" },
              { label: "Nuevo Botón 3", action: "newAction3" },
              { label: "Botones Cambiados", action: "changedButtons" }
            ];
            updateButtons(newButtons);
          }
        });
      </script>
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
