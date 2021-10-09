const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('POHOL na BlinbI')
})

app.post('/', (req, res) => {
    res.send(`${req.cookies.user} ${req.body.message} ${req.body.idu}`);
})

app.get('/setUserName', (req, res) => {
    res.cookie('user', req.query.userName, { httpOnly: true });
    res.send(`${req.query.userName} cookie was set`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})