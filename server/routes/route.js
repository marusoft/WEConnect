import Businesses from '../controller/businessController';
import Users from '../controller/usersController';


export default (app) => {
  app.get('/api/v1/businesses', Businesses.getBusinesses);
  app.post('/api/v1/auth/signup', Users.registerUsers);
  app.post('/api/v1/auth/login', Users.loginUsers);
  app.post('/api/v1/businesses/', Businesses.registerBusiness);
};

