const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('POHOL na HUI')
})

app.post('/', (req, res) => {
    res.send(`${req.body.message} 123 ${req.body.idu}`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})