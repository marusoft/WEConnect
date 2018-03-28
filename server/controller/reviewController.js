import reviews from '../models/reviews';
import businesses from '../models/businesses';
/**
 * @class Reviews
 */
class Reviews {
/**
* @returns {object}  addReviewForBusiness
* @param {*} req
* @param {*} res
*/
  static addReviewForBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        reviews.push({
          id: reviews.length + 1,
          reviewer: req.body.reviewer,
          reviewContent: req.body.reviewContent,
        });
        return res.status(201).json({
          status: 'Success',
          businesses: businesses[i],
          reviews,
          message: 'Review added successfully'
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found',
    });
  }
  /**
  * @returns {object}  getAll reviews for a business
  * @param {*} req
  * @param {*} res
  */
  static getAllReviewsForABusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      const business = businesses[i],
        review = [];
      if (business.id === parseInt(req.params.businessId, 10)) {
        for (let j = 0; j < reviews.length; j += 1) {
          if (reviews[j].businessId === business.id) {
            review.push(reviews[j]);
          }
        }
        return res.status(200).send({
          message: 'Success, review found',
          businesses: businesses[i],
          reviews
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business review not found'
    });
  }

}

export default Reviews;
