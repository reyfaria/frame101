const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Quote Frame</title>
            <meta property="og:title" content="Quote Frame">
            <meta property="og:image" content="https://yourimagehost.com/quote.jpg">
            <meta property="og:description" content="Farcaster Quote Frame">
            <meta name="farcaster:action-label" content="Next Quote">
            <meta name="farcaster:action-request" content="POST">
            <meta name="farcaster:action-url" content="/new-quote">
        </head>
        <body>
            <h1>Welcome to the Quote Frame</h1>
        </body>
        </html>
    `);
});

app.post('/new-quote', (req, res) => {
    // Generate new quote image URL
    const newQuoteImageUrl = "https://media.discordapp.net/attachments/863438662988857416/1250307148534255726/8tky08.png?ex=66eb0105&is=66e9af85&hm=fed147212cdde00a7b8d498a238457b923d11216e5a2e72599d7f5aff42c7a9e&=&format=webp&quality=lossless";
    res.send(`
        <meta property="og:image" content="${newQuoteImageUrl}">
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
