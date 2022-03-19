const express = require('express');
const app = express();

// aqui se va a mandar la info al servidor y se asigna la ruta
app.get('/', (req, res) => { //route handler
    res.send('Hello World, this is the root route');
});

// se asigna el puerto 3000 del local host
app.listen(3000);

// aqui se va a mandar la info al servidor y se asigna la ruta
app.get('/uno', (req, res) => { //route handler
    res.send('Hello World, frome route One');
});
//para ejecutar nodemon server app.js y localhost:3000

app.get('/prueba', (req, res) => { //route handler
    res.send('Hello World, frome route Prueba');
});
//para ejecutar nodemon server app.js y localhost:3000/prueba