import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const should = chai.should(); // eslint-disable-line no-unused-var

chai.use(chaiHttp);


describe('Test all users APIs', () => {
  describe('/POST route', () => {
    const newuser = {
      name: 'solace',
      emailAddress: 'solace@gmail.com',
      password: 'alimikehinde',
    };
    it('should return successfull with status 200', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(newuser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          done();
        });
    });

    it('should return with 400 status code', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send()
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
          done();
        });
    });
  });

  describe('/POST route login user', () => {
    const user = {
      name: 'marusoft',
      password: 'marusoft'
    };
    const notUser = {
      email: 'wrong',
      password: 'fake@gmail.com'
    };
    it('should return welcome with username and 200 status code', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
        });
      done();
    });

    it('should return please sign up with 401 status code', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(notUser)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('string');
          res.body.should.be.eql('please sign up');
        });
      done();
    });
  });

  describe('/POST route create user business', () => {
    const newUser = {
      name: 'SoleRebels',
      photo: 'footwear.jpg',
      description: 'a company responsible for the outlook of humans',
      location: 'Addis Abbaba',
      category: 'clothing',
      email: 'solerebels@gmail.com',
    };
    const nodata = {};
    it('should create business and return 201 status code', (done) => {
      chai.request(app)
        .post('/api/v1/businesses')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
        });
      done();
    });

    it('should not create business but return 401 status code', (done) => {
      chai.request(app)
        .post('/api/v1/businesses')
        .send(nodata)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
        });
      done();
    });
  });
});
