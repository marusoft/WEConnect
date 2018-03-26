import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';


const should = chai.should(); // eslint-disable-line no-unused-var
chai.use(chaiHttp);

describe('POST /businesses/<businessid>/reviews Add a review for a business ', () => {
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
  it('Should return 400 if any empty value', (done) => {
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

describe('GET /businesses/<businessid>/reviews Get all reviews for a business', () => {
  it('Should return 200 for getting reviews', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/1/reviews')
      .end((err, res) => {
        res.should.have.status(200);
      });
    done();
  });
  it('Should return 404 for reviews that does not exist', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/85/review')
      .end((err, res) => {
        res.should.have.status(404);

      });
    done();
  });
});

describe('API to search all business', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .get('/api/v1/businesses')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('API to search a business', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/2')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('Should return 404 if business is not found', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/88')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('GET /businesses?location=<location> Filter Business with the specified location ', () => {
  it('Should return 200 for searching by location', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=lagos')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('Should return 200 for searching by category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=education')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

