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
      <meta property="og:title" content="My Node.js App" />
      <meta property="og:description" content="This is a simple Node.js app with Open Graph and custom meta tags." />
      <meta property="og:image" content="https://fc-dev-call.replit.app/image" />
      <meta property="og:url" content="https://example.com" />
      <!-- Custom Meta Tags -->
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://fc-dev-call.replit.app/image" />
      <meta property="fc:frame:button:1" content="Spec" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://www.farcaster.xyz/reflect/frame101?content=constructing-a-frame" />
      <meta property="fc:frame:button:2" content="Image" />
      <meta property="fc:frame:button:2:action" content="link" />
      <meta property="fc:frame:button:2:target" content="https://fc-dev-call.replit.app/image" />
      <meta property="fc:frame:button:3" content="Frame Validator" />
      <meta property="fc:frame:button:3:action" content="link" />
      <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames" />
      <meta property="fc:frame:button:4" content="Replit" />
      <meta property="fc:frame:button:4:action" content="link" />
      <meta property="fc:frame:button:4:target" content="https://replit.com/@VarunSrinivas4/FrailStridentDisc#index.js" />
    </head>
    <body>
      <h1>Welcome to My Node.js App with Custom Meta Tags!</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
