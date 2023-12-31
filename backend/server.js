const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})

// get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            joke: "What do you call a dog that does magic tricks? A labracadabrador."
        },
        {
            id: 2,
            joke: "Why don't scientists trust atoms? Because they make up everything."
        },
        {
            id: 3,
            joke: "What do you call a fish with no eyes? A fsh."
        },
        {
            id: 4,
            joke: "What did the left eye say to the right eye? Between you and me, something smells."
        },
        {
            id: 5,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
        }
    ]
    res.send(jokes);
})