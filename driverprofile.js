const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const QRCode = require('qrcode');

// Initialize the app
const app = express();
app.use(bodyParser.json());

// MongoDB Connection (Replace with actual URI)
mongoose.connect('mongodb://localhost:27017/qrcodeApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Driver Schema
const driverSchema = new mongoose.Schema({
    name: String,
    vehicleId: String,
    qrCodeUrl: String
});

const Driver = mongoose.model('Driver', driverSchema);

// Route to generate QR code for a driver
app.post('/driver/:id/qrcode', async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);
        const qrCodeData = `https://myapp.com/driver/${driver.id}`;
        QRCode.toDataURL(qrCodeData, async (err, url) => {
            if (err) return res.status(500).send('QR code generation failed');
            driver.qrCodeUrl = url;
            await driver.save();
            res.send({ qrCodeUrl: url });
        });
    } catch (error) {
        res.status(500).send('Error processing request');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
