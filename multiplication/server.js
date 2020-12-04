require('dotenv').config();

const express = require('express');

const multiplicationController = require('./controllers/MultiplicationController');

const app = express();

app.use(express.json());

app.post('/', multiplicationController.operate);

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`);
});