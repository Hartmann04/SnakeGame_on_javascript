const express = require('express')
const app = express()
const path = require('path');
//const port = 3333
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.get('/livia', (req, res) => res.sendFile(path.join(__dirname + '/livia.html')));
app.listen(port, () => console.log(`Servidor aberto na porta => ${port}!`)); 
// Test