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
            
            <!-- Farcaster Frame Meta Tags -->
            <meta property="fc:frame" content="Quote Frame">
            <meta property="fc:frame:image" content="https://yourimagehost.com/quote.jpg">
            
            <!-- Button 1 Meta Tags -->
            <meta property="fc:frame:button:1" content="Next Quote">
            <meta property="fc:frame:button:1:action" content="POST">
            <meta property="fc:frame:button:1:target" content="/new-quote">
            
            <!-- Button 2 Meta Tags (optional) -->
            <meta property="fc:frame:button:2" content="Random Quote">
            <meta property="fc:frame:button:2:action" content="POST">
            <meta property="fc:frame:button:2:target" content="/random-quote">

            <meta property="og:title" content="Quote Frame">
            <meta property="og:image" content="https://yourimagehost.com/quote.jpg">
            <meta property="og:description" content="Farcaster Quote Frame">
        </head>
        <body>
            <h1>Welcome to the Quote Frame</h1>
        </body>
        </html>
    `);
});

app.post('/new-quote', (req, res) => {
    const newQuoteImageUrl = "https://yourimagehost.com/new-quote.jpg";
    res.send(`
        <meta property="og:image" content="${newQuoteImageUrl}">
    `);
});

app.post('/random-quote', (req, res) => {
    const randomQuoteImageUrl = "https://yourimagehost.com/random-quote.jpg";
    res.send(`
        <meta property="og:image" content="${randomQuoteImageUrl}">
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
