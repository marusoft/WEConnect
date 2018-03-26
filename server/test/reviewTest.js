import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';


const should = chai.should(); // eslint-disable-line no-unused-var
chai.use(chaiHttp);

describe('Test for posting review', () => {
  it('Should return 201 if successful', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/2/reviews')
      .send({
        id: 3,
        reviewer: 'marusoft',
        reviewContent: 'One of the best software enginer!',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.to.have.property('status').equal('Success');
      });
    done();
  });
  it('Should return 400 if any empty parameters', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/2/reviews')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.eql('Fail');
        res.body.should.have.a.message.to.equal('No input content');

      });
    done();
  });
});

