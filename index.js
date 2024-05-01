const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', async (req, res) => {
    try {
        const apiResponse = await axios.get('https://devapiservice.azurewebsites.net/api/rebate');
        const rebateData = apiResponse.data;
        res.send(`
            <h1>Rebate Details</h1>
            <p><strong>Amount:</strong> ${rebateData.data.amount}</p>
            <p><strong>Valid Till:</strong> ${rebateData.data.validTill}</p>
        `);
    } catch (error) {
        console.error('API call failed:', error);
        res.send('<p>Failed to fetch rebate details.</p>');
    }
});

app.listen(PORT, () => console.log(`Web App running on http://localhost:${PORT}`));
