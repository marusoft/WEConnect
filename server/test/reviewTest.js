import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import businesses from '../models/businesses';
import reviews from '../models/reviews';


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
describe('POST /businesses/<businessid>/reviews Add a review for a business ', () => {
  it('Should return 201 if successful', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/2/reviews')
      .send({
        id: 3,
        reviewer: '',
        reviewContent: 'One of the best software enginer!',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.to.have.property('status').equal('Success');
      });
    done();
  });
  it('Should return 400 if any reviewer is not available', (done) => {
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


describe('GET /businesses/<businessid>/reviews Get all review for all businesses ', () => {
  it('Should return 201 if successful', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/3/reviews')
      .send({
        id: 3,
        review: 'One of the best software enginer!',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.to.have.property('status').equal('Success');
      });
    done();
  });
  it('Should return 400 if any empty value', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/50/reviews')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.eql('Fail');
        res.body.should.have.a.message.to.equal('No input content');

      });
    done();
  });
});

describe('Testing /POST reviews', () => {
  it('it should add reviews to a particular business by Id', (done) => {
    const business = {
      id: 3,
      name: 'LakeModel',
      photo: 'lake.jpg',
      description: 'A great business',
      location: 'Ilorin',
      category: 'education',
      email: 'lake@gmail.com',
      reviews: []
    };

    const review = {
      id: 1,
      reviewer: 'solace',
      reviewContent: 'The best solicitors in the country!',
    };
    chai.request(app).post('/api/v1/businesses/3/reviews')
      .send(review).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Review added successfully');
        done();
      });
  });
});

describe('Testing /POST reviews', () => {
  it('it should return an error message if a business doesnt exist', (done) => {
    const review = {
      id: 2,
      reviewer: 'optimist',
      reviewContent: 'One of the most powerful woman in the world!',
    };
    chai.request(app).post('/api/v1/businesses/7/reviews')
      .send(review).end((err, res) => {
        res.should.be.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.be.eql('Business not found');
        done();
      });
  });
});



describe('Testing /POST reviews', () => {
  it('it should return an error message if a business doesnt exist', (done) => {
    const review = {
      id: 1,
      reviewer: 'solace',
      reviewContent: 'The best solicitors in the country!',
    };
    chai.request(app).post('/api/v1/businesses/4/reviews')
      .send(review).end((err, res) => {
        res.should.be.status(404);
        res.body.should.have.property('message');
        res.body.message.should.be.eql('Cannot add Review!, Business with businessId 4 does not exist');

      });
    done();
  });
});

describe('Testing /POST reviews', () => {
  it('it should add reviews to a particular business by Id', (done) => {
    const business1 = {
      id: 3,
      name: 'Transport and Haulage',
      photo: 'Haulage.jpg',
      description: 'a company responsible for easy transfer of goods and services',
      category: 'Transportation',
      location: 'lagos',
      email: 'awesome@haulage.com',
      reviews: []
    };
    businesses.push(business1);
    const review = {
      id: 5,
      reviewer: 'kamal',
      reviewContent: 'The best theoretical physicist!',
    };
    chai.request(app).post('/api/v1/businesses/5/reviews')
      .send(review).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('review was added successfully');

      });
    done();
  });
});

describe('Testing /GET reviews for a particular business', () => {
  it('it should get all reviews attached to a particular business', (done) => {
    chai.request(app).get('/api/v1/businesses/3/reviews')
      .end((err, res) => {
        res.should.be.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('reviews loaded successfully');
        res.body.should.have.property('allReviews');

      });
    done();
  });
});
describe('Testing /GET reviews for a existing business that has no review', () => {
  it('it should return an error message if a business exists and has no review', (done) => {
    const business2 = {
      id: 5,
      name: 'Seven and Eight Nig Ltd',
      photo: '7/8.jpg',
      description: 'a company that satchet and bottled water',
      category: 'Food',
      location: 'lagos',
      email: 'seven&eight@gmail.com',
      reviews: []
    };
    businesses.push(business2);
    reviews.push(reviews);
    chai.request(app).get('/api/v1/businesses/4/reviews')
      .end((err, res) => {
        res.should.be.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.eql('reviews not available at this time for business with businessId 5');

      });
    done();
  });
});
describe('Testing /GET reviews for a business that doesnt exist', () => {
  it('it should return an error message if a business doesnt exist', (done) => {
    chai.request(app).get('/api/v1/businesses/69/reviews')
      .end((err, res) => {
        res.should.be.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.eql('Cannot get Review! Business with businessId 69 does not exist');

      });
    done();
  });
});
