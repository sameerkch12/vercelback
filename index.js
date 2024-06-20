const express = require('express');
const { ndown } = require('nayan-media-downloader');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.post('/download', async (req, res) => {
    const { url } = req.body;
    try {
        const data = await ndown(url);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
