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
      <meta property="og:image" content="https://media.giphy.com/media/FVOU6vzPq3XtNfgA66/giphy.gif?cid=82a1493bnml4dk9k62zoxpoehmymeodhmwk4610x2ufom0ou&ep=v1_gifs_trending&rid=giphy.gif&ct=g" />
      <meta property="og:url" content="https://example.com" />

      <!-- Custom Frame Meta Tags -->
      
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://media.giphy.com/media/FVOU6vzPq3XtNfgA66/giphy.gif?cid=82a1493bnml4dk9k62zoxpoehmymeodhmwk4610x2ufom0ou&ep=v1_gifs_trending&rid=giphy.gif&ct=g" />

      <meta property="fc:frame:button:1" content="Threads" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://www.threads.net/@ander.focus.ia/post/C-8WpD0IZDm?hl=es-la" />

      <meta property="fc:frame:button:2" content="Image" />
      <meta property="fc:frame:button:2:action" content="link" />
      <meta property="fc:frame:button:2:target" content="https://wrpcd.net/cdn-cgi/imagedelivery/BXluQx4ige9GuW0Ia56BHw/f8f79048-5e5c-4bff-41df-09b45c25da00/original" />

      <meta property="fc:frame:button:3" content="Frame Validator" />
      <meta property="fc:frame:button:3:action" content="link" />
      <meta property="fc:frame:button:3:target" content="Target3 Description" />

      <meta property="fc:frame:button:4" content="Vercel" />
      <meta property="fc:frame:button:4:action" content="Link" />
      <meta property="fc:frame:button:4:target" content="https://vercel.com/rays-projects-e2d8a46b/frame101" />
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
