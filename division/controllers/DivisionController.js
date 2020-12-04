module.exports = {
    async operate(request, response) {
        const { num1, num2 } = request.body;

        const result = num1 / num2;

        return response.json({
            result
        });
    }
}