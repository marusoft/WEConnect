import users from '../models/users';
/**
 * @class Users
*/
class Users {
  // Register a user or signup user

  /**
   * @returns {Object} RegisterUser
   * @param {*} req
   * @param {*} res
   */
  static registerUsers(req, res) {
    const userName = req.body.username;
    if (req.body.username && req.body.email && req.body.password) {
      users.push({
        name: req.body.username,
        emailAddress: req.body.email,
        password: req.body.password
      });
      return res.status(201).json({
        message: `${userName} created successfully`
      });
    }
    return res.status(400).json({
      message: 'please supply an input',
      error: true
    });

  }
  // login a user
  /**
   * @returns {Object} loginUser
   * @param {*} req
   * @param {*} res
   */
  static loginUsers(req, res) {
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].name === req.body.username && users[i].password === req.body.password) {
        return res.status(200).json({
          message: `Welcome ${users[i].name}!`
        });
      }
    }
    return res.status(401).json({
      message: 'please sign up'
    });
  }
}

export default Users;
