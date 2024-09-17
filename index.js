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
    const newQuoteImageUrl = "https://www.infobae.com/new-resizer/CQipQIH8c4vTBSrLF_j4vH_VbIc=/1440x810/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/75GQQEPX5BAEPKH4RMSTZDEQP4.jpg";
    res.send(`
        <meta property="og:image" content="${newQuoteImageUrl}">
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
