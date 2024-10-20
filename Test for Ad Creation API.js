describe('/POST ads', () => {
    it('should POST a new advertisement', (done) => {
        const adData = { businessName: 'Smoke Shop', adContent: 'Get 10% off', targetDemographics: '18-35' };
        chai.request(server)
            .post('/ads')
            .send(adData)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('message').eql('Ad created successfully');
                done();
            });
    });
});
