const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from API!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});