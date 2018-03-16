import Businesses from '../controller/businessController';
import Users from '../controller/usersController';
import Reviews from '../controller/reviewController';


export default (app) => {
  app.get('/api/v1/businesses', Businesses.getBusinesses);
  app.post('/api/v1/auth/signup', Users.registerUsers);
  app.post('/api/v1/auth/login', Users.loginUsers);
  app.post('/api/v1/businesses/', Businesses.registerBusiness);
  app.put('/api/v1/businesses/:businessId', Businesses.updateBusinessProfile);
  app.delete('/api/v1/businesses/:businessId', Businesses.removeBusiness);
  app.get('/api/v1/businesses/:businessId', Businesses.getABusiness);
  app.post('/api/v1/businesses/:businessId/reviews', Reviews.addReview);
};

