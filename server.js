const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})