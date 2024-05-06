const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the Node.js backend!');
});

const PORT = process.env.PORT || 3000; // Use the environment port or 3000 as default
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
