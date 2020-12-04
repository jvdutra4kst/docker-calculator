require('dotenv').config();

const express = require('express');

const subtractionController = require('./controllers/SubtractionController');

const app = express();

app.use(express.json());

app.post('/', subtractionController.operate);

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`);
});