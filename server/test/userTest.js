import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const should = chai.should(); // eslint-disable-line no-unused-var
chai.use(chaiHttp);


describe('Test all users APIs', () => {
  describe('/POST route register user', () => {
    const newUser = {
      username: 'solace',
      emailAddress: 'solace@gmail.com',
      password: 'alimikehinde',
    };
    it('should successfully register a user if user does not exist with status 200', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
        });
      done();
    });

    it('should return an error with 400 status code', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send()
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('message');

        });
      done();
    });
  });

  describe('/POST route loginUsers', () => {
    const loginUsers = {
      username: 'marusoft',
      emailAddress: 'marusoft@gmail.com',
      password: 'marusoft'
    };
    const notloginUsers = {
      username: 'disguise',
      emailAddress: 'unknown@gmail.com',
      password: 'wrong1223345678900'
    };
    it('should return welcome with username and 200 status code', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(loginUsers)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
        });
      done();
    });

    it('should return please sign up with 401 status code', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(notloginUsers)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('string');
          res.body.should.be.eql('please sign up');
        });
      done();
    });
  });


  describe('/POST route loginUsers', () => {
    const users = {
      username: 'marusoft',
      password: 'marusoft123'
    };
    const notUsers = {
      username: 'disguise',
      password: 'wrong1223345678900'
    };
    it('should return welcome with username and 200 status code', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(users)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
        });
      done();
    });

    it('should return please sign up with 401 status code', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(notUsers)
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
          res.should.have.status(401);
          res.body.should.be.a('object');
        });
      done();
    });
    describe('Test API', () => {
      it('Should return 200 for the default route', (done) => {
        chai.request(app)
          .get('/')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');

          });
        done();
      });
      it('Should return 404 for routes not specified', (done) => {
        chai.request(app)
          .get('/another/undefined/route')
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');

          });
        done();
      });
      it('Undefined Routes Should Return 404', (done) => {
        chai.request(app)
          .post('/another/undefined/route')
          .send({ random: 'random' })
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
          });
        done();
      });
    });
  });
});
