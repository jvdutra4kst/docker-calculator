const axios = require('axios');

module.exports = {
    async operate(request, response) {
        var { num1, num2 } = request.body;

        if(num2 == 0) {
			return res.json({ result: 0 });
        }
        
        var result = 0;

		while(num1 >= num2) {
            const request = (await axios.post(process.env.SUBTRACTION_URL, {
                num1,
                num2
            })).data;

            num1 = request.result;
            
			result++;
		}

        return response.json({
            result
        });
    }
}