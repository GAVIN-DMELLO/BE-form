const express = require('express');
const mainRouter = require('./routes/mainRouter');

const app = express();

app.use(express.json()); 
app.use('/api/v1', mainRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});