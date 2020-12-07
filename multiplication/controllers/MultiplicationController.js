const axios = require('axios');

module.exports = {
    async operate(request, response) {
        var { num1, num2 } = request.body;

        if(num1 < 0) {
			num1 = Math.abs(num1);
        }
        
        var cont = 0;
        var result = 0;
        
        while(cont < num1) {
            const request = (await axios.post(process.env.SUM_URL, {
                num1: total,
                num2
            })).data;

			total = request.result;
			cont++;
		}

        return response.json({
            result
        });
    }
}