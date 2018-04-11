import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';


const should = chai.should(); // eslint-disable-line no-unused-var
chai.use(chaiHttp);

describe('register a business POST /businesses/ ', () => {
  it('Should return 201 for a successful post', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: 'pre-schooler and basic',
        category: 'Education',
        location: 'lagos',
        email: 'zenithal@gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business created successfully');
      });
    done();
  });

  it('Should return 400 for post without description', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: ' ',
        category: 'Education',
        location: 'lagos',
        email: 'zenithal@gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business description cannot be empty');
      });
    done();
  });
});


describe('PUT /businesses/<businessId> API to update business', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: 'pre-schooler and basic',
        category: 'Education',
        location: 'lagos',
        email: 'zenithal@gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business updated successfully');
      });
    done();
  });
  it('Should return 400 for PUT without business update', (done) => {
    chai.request(app)
      .put('/api/v1/businesses/1')
      .send({
        id: 4,
        name: ' ',
        photo: 'Zenithal.jpg',
        location: 'lagos',
        category: 'Education',
        description: 'pre-schooler and basic',
        email: 'zenithal@gmail.com',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business update was not successful');
      });
    done();
  });
});

describe('DELETE /businesses/<businessId> API to remove a business', () => {
  it('Should return 200 for succesful delete request ', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business deleted successfully');

      });
    done();
  });
  it('Should return 404 if parameter is not found', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/50')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business details to be deleted was not found');

      });
    done();
  });
});

describe('register a business POST /businesses/ ', () => {
  it('Should return 201 for a successful post', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: 'pre-schooler and basic',
        category: 'Education',
        location: 'lagos',
        email: 'zenithal@gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business added successfully');
      });
    done();
  });

  it('Should return 400 for post with invalid email', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: 'school for basic and pre-schooler ',
        category: 'Education',
        location: 'lagos',
        email: '  @gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business description cannot be empty');
      });
    done();
  });
});

describe('register a business POST /businesses/ ', () => {
  it('Should return 201 for a sucessful post', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: 'pre-schooler and basic',
        category: 'Education',
        location: 'lagos',
        email: 'zenithal@gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business added successfully');
      });
    done();
  });

  it('Should return 400 for post without a specified location', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: 'pre-schooler and basic ',
        category: 'Education',
        location: ' ',
        email: 'zenithal@gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business description cannot be empty');
      });
    done();
  });
});

describe('register a business POST /businesses/ ', () => {
  it('Should return 201 for a sucessful post', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: 'pre-schooler and basic',
        category: 'Education',
        location: 'lagos',
        email: 'zenithal@gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business added successfully');
      });
    done();
  });

  it('Should return 400 for post without a specified category', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send({
        id: 4,
        name: 'Zenithal',
        photo: 'Zenithal.jpg',
        description: 'pre-schooler and basic ',
        category: ' ',
        location: 'Lokoja ',
        email: 'zenithal@gmail.com',

      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business description cannot be empty');
      });
    done();
  });
});

describe('Sort Business by location and category', () => {
  it('Return 200 for successful search by location', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=lagos')
      .end((err, res) => {
        res.should.have.status(200);

      });
    done();
  });
  it('Return 200 for successful search by category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=entertainment')
      .end((err, res) => {
        res.should.have.status(200);

      });
    done();
  });
  it('Return 406 for unsuccessful search by category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=entertainment&location=abcd')
      .end((err, res) => {
        res.should.have.status(406);
        res.body.should.be.equal('Fail');
        res.body.should.have.message.to.equal('The location and category matching does not exist');

      });
    done();
  });
  it('Return 406 for non-existing category', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=abcd')
      .end((err, res) => {
        res.should.have.status(406);
        res.body.should.be.equal('Fail');

      });
    done();
  });
  it('Return 406 for non-existing location', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=abcd')
      .end((err, res) => {
        res.should.have.status(406);
        res.body.should.be.equal('Fail');

      });
    done();
  });
});
describe('DELETE /businesses/<businessId> API to remove a business', () => {
  it('Should return 200 for succesful delete request ', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business deleted successfully');

      });
    done();
  });
  it('Should return 404 if parameter is not found', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/50')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('string');
        res.body.should.be.eql('Business details to be deleted was not found');

      });
    done();
  });
});
