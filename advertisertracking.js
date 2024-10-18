const express = require('express');
const router = express.Router();
const Advertisement = require('../models/Advertisement');

// Create new advertisement
router.post('/advertisements', async (req, res) => {
    const { businessName, adContent, targetDemographics } = req.body;
    try {
        const ad = new Advertisement({ businessName, adContent, targetDemographics });
        await ad.save();
        res.json({ message: 'Ad created successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
