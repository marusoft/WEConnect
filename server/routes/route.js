import Businesses from '../controller/business';

export default (app) => {
  app.get('/api/v1/businesses', Businesses.getBusinesses);

};

