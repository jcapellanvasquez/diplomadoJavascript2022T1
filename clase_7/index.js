const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('assets'))


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/vistas/index.html'));
})

app.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname, '/vistas/resume.html'));
})

app.listen(3000)
console.log('Applicacion corriendo en el puerto 3000')
