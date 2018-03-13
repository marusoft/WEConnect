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
    return res.status(200).json({
      businesses
    });
  }
}
export default Businesses;
