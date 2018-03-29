import businesses from '../models/businesses';
/**
 * @class Businesses
*/
class Businesses {
  /**
   * @returns {object} getBusinesses
   * @param {*} req
   * @param {*} res
   */
  static getBusinesses(req, res) {
    if (businesses.length === 0) {
      return res.status(404).send('404 business not found');
    }
    return res.status(200).json({
      getBusinesses: businesses,
    });
  }
  /**
   * @returns {object} getABusiness
   * @param {*} req
   * @param {*} res
   */
  static getABusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      const business = businesses[i];
      if (business.id === parseInt(req.params.businessId, 10)) {
        return res.status(200).send({
          status: 'Awesome',
          business: businesses[i],
          message: 'success',
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found'
    });
  }


  /**
   * @returns {object} RegisterBusiness
   * @param {*} req
   * @param {*} res
   */
  static registerBusiness(req, res) {
    const {
      name, description, photo, category, location, email,
    } = req.body;
    const id = businesses.length + 1;
    const createBusiness = {
      id,
      name,
      photo,
      location,
      category,
      description,
      email,
    };
    const peruseBusiness = businesses.find(business => (business.name.toLowerCase()
      === name.toLowerCase() && business.photo.toLowerCase() === photo.toLowerCase())
      || business.email === email);
    if (!peruseBusiness) {
      businesses.push(createBusiness);
      res.status(201)
        .send({
          business: createBusiness,
          status: 'Success',
          message: 'Business created successfully',
        });
    }
    if (peruseBusiness) {
      if (peruseBusiness.photo === photo) {
        return res.status(409)
          .json({
            message: `Photo logo '${photo}' is in use by another business`,
            status: 'Fail',
          });
      }
    }
    return res.status(409)
      .json({
        message: `The business '${peruseBusiness.name}' already exist at this address`,
        status: 'Fail',
      });
  }


  /**
   * @returns {object} UpdateBusinessProfile
   * @param {*} req
   * @param {*} res
   */
  static updateBusinessProfile(req, res) {
    const peruseBusiness = businesses.find(business =>
      business.id === parseInt(req.params.businessId, 10));
    if (peruseBusiness) {
      peruseBusiness.name = req.body.name;
      peruseBusiness.description = req.body.description;
      peruseBusiness.location = req.body.location;
      peruseBusiness.category = req.body.category;
      peruseBusiness.photo = req.body.photo;
      peruseBusiness.email = req.body.ema;
      return res.status(200)
        .json({
          peruseBusiness,
          status: 'Success',
          message: 'Business updated successfully',
        });
    }
    return res.status(404)
      .json({
        status: 'Error',
        message: 'Business not found',
      });
  }

  /**
   * @returns {object} RemoveBusiness
   * @param {*} req
   * @param {*} res
   */
  static removeBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses.splice(i, 1);
        return res.status(200).json({
          status: 'Awesome',
          message: 'Business deleted successfully',
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found'
    });
  }
  /**
   * @returns {object} Get all businesses with the specified location and category
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static filterSearch(req, res, next) {
    const result = [];
    const { category, location } = req.query;
    for (let i = 0; i < businesses.length; i += 1) {
      if (category === businesses[i].category &&
        location === businesses[i].location) {
      // Get businesses in a particlar location within a category
        result.push(businesses[i]);
      } else if (!category && location === businesses[i].location) {
      // Get all businesses within a location
        result.push(businesses[i]);
      } else if (category === businesses[i].category && !location) {
      // Get all businesses within a category
        result.push(businesses[i]);
      } else if (!category && !location) {
      // Go to next route
        next();
      }
    }
    return res.status(200)
      .send({
        searchResult: result,
        message: 'Great, your search was successful',
        status: 'Success',
      });
  }

}
export default Businesses;
