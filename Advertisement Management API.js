const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    businessName: String,
    adContent: String,
    targetDemographics: String,
    views: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 }
});

const Advertisement = mongoose.model('Advertisement', adSchema);
module.exports = Advertisement;
