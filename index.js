const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Meta Tag App</title>
            <meta property="og:title" content="Simple Node App">
            <meta property="og:description" content="This is a simple Node app returning HTML with meta tags">
            <meta property="og:image" content="https://example.com/image.jpg">
        </head>
        <body>
            <h1>Welcome to my simple Node app!</h1>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
