import reviews from '../models/reviews';
import businesses from '../models/businesses';
/**
 * @class Reviews
 */
class Reviews {
/**
* @returns {object}  addAreviewForAbusiness
* @param {*} req
* @param {*} res
*/
  static addReview(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        reviews.push({
          id: reviews.length + 1,
          businessId: req.body,
          content: req.body,
        });
        return res.status(201).send({
          status: 'Success',
          message: 'Review added successfully',
          review: reviews[reviews.length - 1]
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found',
    });
  }

}

export default Reviews;
