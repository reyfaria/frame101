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
      <meta property="og:image" content="https://www.refined-marques.com/wp-content/uploads/2020/11/Lamborghini-and-Ferrari-900x480-1.jpg" />
    </head>
    <body>
      <h1>Frame con Botones Dinámicos</h1>
      <div id="buttonContainer">Botones deberían aparecer aquí</div>
      <script>
        setTimeout(function() {
          const container = document.getElementById('buttonContainer');
          container.innerHTML = '';  // Clear the placeholder text
          const buttons = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          buttons.forEach(function(month) {
            const button = document.createElement('button');
            button.textContent = month;
            button.onclick = function() { alert(month); };
            container.appendChild(button);
          });
        }, 1000); // Delay the execution to ensure the DOM is fully loaded
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
