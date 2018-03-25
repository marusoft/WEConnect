import app from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import expect from 'chai';

chai.use(chaiHttp);
const should = chai.should();

describe('/Test all routes on business', () => {
    describe('/PUT route create business', () => {
        it('should update a business and return 200 status code', (done) => {
            chai.request(app)
                .put('/api/v1/business/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql('business profile succesfully updated')
                    done();
                });
        });

        it('should not update business and return 404 status code', (done) => {
            chai.request(app)
                .put('/api/v1/business/90')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.equal('404 business not found');
                    done();
                });
        })
    })

    describe('/DELETE route destroy business', () => {
        it('should delete a business and return 200 status code', (done) => {
            chai.request(app)
                .delete('/api/v1/business/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql('successfully deleted')
                    done();
                });
        });

        it('should return 404 page not found and 404 status code', (done) => {
            chai.request(app)
                .delete('/api/v1/business/90')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        })
    })

    describe('/GET route find a business', () => {
        it('should not return a business and return 404 status code', (done) => {
            chai.request(app)
                .get('/api/v1/business/90')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.be.a('string');
                    done();
                });
        });

        it('should return a business and return 200 status code', (done) => {
            chai.request(app)
                .get('/api/v1/business/3')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/POST route review business', () => {
        it('should post a reviews and return 200 status code', (done) => {
            chai.request(app)
                .post('/api/v1/businesses/1/reviews')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql("Thanks, Your feedback is taken")
                    done();
                });
        });

        it('should not create business but return 401 status code', (done) => {
            chai.request(app)
                .post('/api/v1/businesses/10/reviews')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.be.a('string');
                });
            done();
        });
    });
})