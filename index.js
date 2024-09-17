const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:title" content="Example Title" />
      <meta property="og:image" content="http://example.com/image.jpg" />
      <meta property="og:description" content="Description Here" />
      <title>Document</title>
    </head>
    <body>
      <h1>Hello World!</h1>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
