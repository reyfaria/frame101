const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:title" content="My Node.js App" />
      <meta property="og:description" content="This is a simple Node.js App" />
      <meta property="og:image" content="https://example.com/image.jpg" />
      <meta property="og:url" content="https://example.com" />
      <!-- Custom Frame Meta Tags -->
      <meta property="fc:frame" content="Frame Value Here" />
      <meta property="fc:frame:image" content="https://example.com/frame-image.jpg" />
      <meta property="fc:frame:button:1" content="Button1 Action" />
      <meta property="fc:frame:button:1:action" content="Action1 URL" />
      <meta property="fc:frame:button:1:target" content="Target1 Description" />
      <meta property="fc:frame:button:2" content="Button2 Action" />
      <meta property="fc:frame:button:2:action" content="Action2 URL" />
      <meta property="fc:frame:button:2:target" content="Target2 Description" />
      <meta property="fc:frame:button:3" content="Button3 Action" />
      <meta property="fc:frame:button:3:action" content="Action3 URL" />
      <meta property="fc:frame:button:3:target" content="Target3 Description" />
      <meta property="fc:frame:button:4" content="Button4 Action" />
      <meta property="fc:frame:button:4:action" content="Action4 URL" />
      <meta property="fc:frame:button:4:target" content="Target4 Description" />
      <!-- Add more meta tags as needed -->
    </head>
    <body>
      <h1>Welcome to My Node.js App!</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
