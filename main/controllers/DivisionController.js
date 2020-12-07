const axios = require('axios');

module.exports = {
    async operate(request, response) {
        const { num1, num2 } = request.body;

        const result = (await axios.post(process.env.DIVISION_URL, {
            num1,
            num2
        })).data;

        return response.json(result);
    }
}