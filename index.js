const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Simple Frame Example</title>
      
      <!-- Open Graph Tags -->
      <meta property="og:image" content="https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080" />
      <meta property="og:title" content="Simple Frame Example" />
      
      <!-- Farcaster Tags -->
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080" />
      
      <!-- Botones -->
      <meta property="fc:frame:button:1" content="Botón 1" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://www.example.com/action1" />

      <meta property="fc:frame:button:2" content="Botón 2" />
      <meta property="fc:frame:button:2:action" content="link" />
      <meta property="fc:frame:button:2:target" content="https://www.example.com/action2" />

    </head>
    <body>
      <h1>Simple Frame Example</h1>
    </body>
    </html>`
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
