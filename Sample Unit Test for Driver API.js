const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Import the Express app
const Driver = require('../models/Driver');

chai.use(chaiHttp);
const should = chai.should();

describe('Driver API', () => {
    beforeEach((done) => {
        // Clean up the test database
        Driver.deleteMany({}, (err) => {
            done();
        });
    });

    describe('/GET driver/:id', () => {
        it('should GET a driver by the given id', (done) => {
            const newDriver = new Driver({ name: 'John Doe', vehicleId: '1234', qrCodeUrl: 'http://test.com/qr', earnings: 5000 });
            newDriver.save((err, driver) => {
                chai.request(server)
                    .get(`/driver/${driver.id}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql('John Doe');
                        res.body.should.have.property('earnings').eql(5000);
                        done();
                    });
            });
        });
    });
});
