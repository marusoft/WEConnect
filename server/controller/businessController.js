import businesses from '../models/businesses';
/**
 * @class Businesses
*/
class Businesses {
  /**
   * @returns {Object} getBusinesses
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

  // Register a business

  /**
   * @returns {Object} RegisterBusiness
   * @param {*} req
   * @param {*} res
   */
  static registerBusiness(req, res) {
    if (req.body.businessname && req.body.image && req.body.description &&
      req.body.category && req.body.location && req.body.email) {
      businesses.push({
        name: req.body.businessname,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        email: req.body.email,

      });
      return res.status(201).json({
        message: ' business created successfully'
      });
    }
    return res.status(400).json({
      message: 'Complete all field',
      error: true
    });

  }
  // Update Business Profile
  /**
   * @returns {Object} UpdateBusinessProfile
   * @param {*} req
   * @param {*} res
   */
}
export default Businesses;
