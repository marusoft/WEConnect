import users from '../models/users';
/**
 * @class Users
*/
class Users {

  /**
   * @returns {object} registerUsers
   * @param {*} req
   * @param {*} res
   */
  static registerUsers(req, res) {
    users.push({
      id: users.length + 1,
      username: req.body.name,
      emailAddress: req.body.emailAddress,
      password: req.body.password
    });
    return res.status(201).json({
      message: 'account created successfully,'
    });
  }
  /**
   * @returns {Object} loginUser
   * @param {*} req
   * @param {*} res
   */
  static loginUsers(req, res) {
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].username === req.body.username && users[i].password === req.body.password) {
        return res.status(200).json({
          message: 'Account login successful'
        });
      }
    }
    return res.status(401).json({
      message: 'please sign up or supply the correct input'
    });
  }
}

export default Users;
