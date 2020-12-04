const axios = require('axios');

module.exports = {
    async operate(request, response) {
        const { num1, num2 } = request.body;
        
        const result = (await axios.post(`http://${process.env.SUM_NAME}:8000/`, {
            num1,
            num2
        })).data;

        return response.json(result);
    }
}