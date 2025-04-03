// ACESSO NO NAVEGADOR: http://127.0.0.1:3000/

const { createServer } = require('node:http');
const express = require("express");

const hostname = '127.0.0.1';

const server = createServer((req, res) => {
});

const app = express()
const port = 3000
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req);
    res.status(200);
    res.setHeader("Content-type", "text/html");
    res.sendFile(__dirname + "/pages/index.html");
})

app.get('/login', (req, res) => {
    console.log(req);
    res.status(200);
    res.setHeader("Content-type", "text/html");
    res.sendFile(__dirname + "/pages/login.html");
})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})
