const express = require('express');
const app = express();


const port = 4000
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({Illia: 'hello illia'})
})


app.listen(port)