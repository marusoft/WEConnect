import Businesses from '../controller/businessController';
import Users from '../controller/usersController';
import Reviews from '../controller/reviewController';

import FilterSearch from '../middleware/filterSearchValidator';
import UserValidation from '../middleware/userValidator';
import BusinessValidator from '../middleware/businessValidator';
import ReviewValidator from '../middleware/reviewValidator';


export default (app) => {
  app.post('/api/v1/auth/signup', UserValidation.userInput, Users.registerUsers);
  app.post('/api/v1/auth/login', UserValidation.userInput, Users.loginUsers);
  app.post('/api/v1/businesses', BusinessValidator.businessInput, Businesses.registerBusiness);
  app.get('/api/v1/businesses', FilterSearch.filterSearch, Businesses.getBusinesses);
  app.put('/api/v1/businesses/:businessId', Businesses.updateBusinessProfile);
  app.delete('/api/v1/businesses/:businessId', Businesses.removeBusiness);
  app.get('/api/v1/businesses/:businessId', Businesses.getABusiness);
  app.post('/api/v1/businesses/:businessId/reviews', Reviews.addReviewForBusiness);
  app.get('/api/v1/businesses/:businessId/reviews', ReviewValidator.reviewInput, Reviews.getAllReviewsForABusiness);
};

