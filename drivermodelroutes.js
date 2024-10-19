const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: String,
    vehicleId: String,
    qrCodeUrl: String,
    earnings: Number
});

const Driver = mongoose.model('Driver', driverSchema);
module.exports = Driver;
