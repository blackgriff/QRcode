const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/qr-platform', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
