const express = require('express');

const router = express.Router();

const sumController = require('./controllers/SumController');
const subtractionController = require('./controllers/SubtractionController');
const multiplicationController = require('./controllers/MultiplicationController');
const divisionController = require('./controllers/DivisionController');

router.get('/', (request, response) => {
    return response.json({
        message: 'Alive!'
    });
})

router.post('/sum', sumController.operate);
router.post('/subtraction', subtractionController.operate);
router.post('/multiplication', multiplicationController.operate);
router.post('/division', divisionController.operate);

module.exports = router;