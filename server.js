const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

// Handle POST request for summarization
app.post('/summarize', (req, res) => {
    const inputText = req.body.inputText;
    const summaryLength = req.body.summaryLength;
    const paragraphMode = req.body.paragraphMode;
    const bulletPointMode = req.body.bulletPointMode;
    const customMode = req.body.customMode;

    // paste ML  logic here

    const summary = 'This is a placeholder summary. Implement your summarization logic.';
    res.json({ summary });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
