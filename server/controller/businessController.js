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

  // Get a business
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

  // Register a business

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
    businesses.push(createBusiness);
    res.status(201)
      .send({
        business: createBusiness,
        status: 'Success',
        message: 'Business created successfully',
      });
  }
  // Update Business Profile
  /**
   * @returns {object} UpdateBusinessProfile
   * @param {*} req
   * @param {*} res
   */
  static updateBusinessProfile(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses[i].name = req.body.name;
        businesses[i].photo = req.body.photo;
        businesses[i].description = req.body.description;
        businesses[i].category = req.body.category;
        businesses[i].location = req.body.location;
        businesses[i].email = req.body.email;
        return res.status(201).json({
          status: 'Success',
          businesses,
          message: 'Business profile updated successfully'
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found'
    });
  }
  // Remove a business
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
