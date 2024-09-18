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

      <meta property="og:image" content="https://proxy.wrpcd.net/?url=https%3A%2F%2Fmedia.decentralized-content.com%2F-%2Frs%3Afit%3A640%3A640%2Ff%3Apng%2FaHR0cHM6Ly96b3JhLmNvL2FwaS90aHVtYm5haWwvZmMvNzc3Nzc3Ny8weDVhYmYwYzA0YWI3MTk2ZTJiZGQxOTMxM2I0NzliYWViZDlmNzc5MWIvMjQy&s=d3397888cc1112adb0a2a4ac2e3c640ce13b6fdc6aa2628d46ccd9a63ebb39c9" />
      
      
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://proxy.wrpcd.net/?url=https%3A%2F%2Fmedia.decentralized-content.com%2F-%2Frs%3Afit%3A640%3A640%2Ff%3Apng%2FaHR0cHM6Ly96b3JhLmNvL2FwaS90aHVtYm5haWwvZmMvNzc3Nzc3Ny8weDVhYmYwYzA0YWI3MTk2ZTJiZGQxOTMxM2I0NzliYWViZDlmNzc5MWIvMjQy&s=d3397888cc1112adb0a2a4ac2e3c640ce13b6fdc6aa2628d46ccd9a63ebb39c9" />

      <meta property="fc:frame:button:1" content="Threads" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://www.threads.net/@ander.focus.ia/post/C-8WpD0IZDm?hl=es-la" />

      <meta property="fc:frame:button:2" content="Image" />
      <meta property="fc:frame:button:2:action" content="link" />
      <meta property="fc:frame:button:2:target" content="https://wrpcd.net/cdn-cgi/imagedelivery/BXluQx4ige9GuW0Ia56BHw/f8f79048-5e5c-4bff-41df-09b45c25da00/original" />

      <meta property="fc:frame:button:3" content="Frame Validator" />
      <meta property="fc:frame:button:3:action" content="link" />
      <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames" />

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
