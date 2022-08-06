const express = require('express');

const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})