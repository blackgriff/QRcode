// Route to onboard a new driver
app.post('/driver/onboard', async (req, res) => {
    try {
        const { name, vehicleId } = req.body;
        const newDriver = new Driver({ name, vehicleId });
        await newDriver.save();
        res.send({ message: 'Driver onboarded successfully' });
    } catch (error) {
        res.status(500).send('Error onboarding driver');
    }
});
