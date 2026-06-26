const formService = require('../services/formService');

async function handleFormSubmission(req, res) {
    try {
        const incomingData = req.body;
        const processedResult = await formService.processFormData(incomingData);
        return res.status(200).json(processedResult);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { handleFormSubmission };