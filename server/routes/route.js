import Businesses from '../controller/businessController';
import Users from '../controller/usersController';
import Reviews from '../controller/reviewController';
import FilterSearch from '../middlewares/filterSearchValidator';
import {
  businessRequiredInputs, userRequiredInput,
  reviewRequiredInput,
} from '../middlewares/index';


export default (app) => {
  app.post('/api/v1/auth/signup', userRequiredInput, Users.registerUsers);
  app.post('/api/v1/auth/login', userRequiredInput, Users.loginUsers);
  app.post('/api/v1/businesses', businessRequiredInputs, Businesses.registerBusiness);
  app.get('/api/v1/businesses', FilterSearch.filterSearch, Businesses.getBusinesses);
  app.put('/api/v1/businesses/:businessId', Businesses.updateBusinessProfile);
  app.delete('/api/v1/businesses/:businessId', Businesses.removeBusiness);
  app.get('/api/v1/businesses/:businessId', Businesses.getABusiness);
  app.post('/api/v1/businesses/:businessId/reviews', reviewRequiredInput, Reviews.addReviewForBusiness);
  app.get('/api/v1/businesses/:businessId/reviews', reviewRequiredInput, Reviews.getAllReviewsForABusiness);
};

