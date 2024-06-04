const express = require('express');
const { ndown } = require('nayan-media-downloader');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/download', async (req, res) => {
    const { url } = req.body;
    try {
        const data = await ndown(url);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
