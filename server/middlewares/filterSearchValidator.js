import businesses from '../models/businesses';
/**
 * @class Search
 */
class FilterSearch {
  /**
   * @returns {Object} filterSearch
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static filterSearch(req, res, next) {
    const { category, location } = req.query;
    const categorize = [];
    const locate = [];
    if (category) {
      for (let i = 0; i < businesses.length; i += 1) {
        if (category.toLowerCase() === businesses[i].category.toLowerCase()) {
          categorize.push(businesses[i]);
        }
      }
      return res.status(200).json(categorize);
    }
    if (location) {
      for (let i = 0; i < businesses.length; i += 1) {
        if (location.toLowerCase() === businesses[i].location.toLowerCase()) {
          locate.push(businesses[i]);
        }
      }
      return res.status(200).json(locate);
    } else if (!location || !category) {
      next();
    }
  }
}

export default FilterSearch;
