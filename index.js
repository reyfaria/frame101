const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const frameHtml = (image, button1Text, button2Text) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${image}" />
    <meta property="fc:frame:button:1" content="${button1Text}" />
    <meta property="fc:frame:button:2" content="${button2Text}" />
    <meta property="fc:frame:post_url" content="https://frame101.vercel.app/api/frame" />
    <title>Farcaster Frame</title>
</head>
<body>
    <h1>Farcaster Frame Example</h1>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(frameHtml(
        'https://placekitten.com/800/600',
        'Visit Claude AI',
        'Go to YouTube'
    ));
});

app.post('/api/frame', (req, res) => {
    const { buttonIndex } = req.body;
    
    if (buttonIndex === 1) {
        res.send(frameHtml(
            'https://placekitten.com/800/600',
            'Redirecting...',
            ''
        ) + '<meta http-equiv="refresh" content="0;url=https://www.anthropic.com" />');
    } else if (buttonIndex === 2) {
        res.send(frameHtml(
            'https://placekitten.com/800/600',
            'Redirecting...',
            ''
        ) + '<meta http-equiv="refresh" content="0;url=https://www.youtube.com" />');
    } else {
        res.status(400).send('Invalid button index');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
