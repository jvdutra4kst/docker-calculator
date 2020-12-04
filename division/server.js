require('dotenv').config();

const express = require('express');

const divisionController = require('./controllers/DivisionController');

const app = express();

app.use(express.json());

app.post('/', divisionController.operate);

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`);
});