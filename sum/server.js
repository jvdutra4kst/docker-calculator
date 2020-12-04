require('dotenv').config();

const express = require('express');

const sumController = require('./controllers/SumController');

const app = express();

app.use(express.json());

app.post('/', sumController.operate);

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`);
});