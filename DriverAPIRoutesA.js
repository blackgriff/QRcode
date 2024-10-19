const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');

// Get a driver's profile
router.get('/driver/:id', async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);
        res.json(driver);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
