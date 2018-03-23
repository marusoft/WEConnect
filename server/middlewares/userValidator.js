/**
 * Checks for the required input fields
 *
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - Calls the next route handler
 * @returns {object} JSON object representing the failure message
 */
const userRequiredInput = (req, res, next) => {
  req.checkBody({
    name: {
      notEmpty: {
        options: true,
        errorMessage: 'name is required'
      },
      isLength: {
        options: [{ min: 2 }],
        errorMessage: 'name length should be at least 2'
      },
      matches: {
        options: /^[a-zA-Z]+$/,
        errorMessage: 'name should be alphabets only'
      }
    },
    emailAddress: {
      notEmpty: {
        options: true,
        errorMessage: 'Email is required'
      },
      isEmail: {
        errorMessage: 'Email is invalid'
      }
    },
    password: {
      notEmpty: {
        options: true,
        errorMessage: 'Password is required'
      },
      isLength: {
        options: [{ min: 7 }],
        errorMessage: 'password should be at least 7 characters'
      }
    }
  });
  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send({ message: errors[0].msg });
  }
  next();
};
export default userRequiredInput;
