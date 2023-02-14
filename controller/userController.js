const asyncHandler = require('express-async-handler');
const { CustomError } = require('./../middlewares/errorHandler');
const User = require('./../models/userModel');

class Users {
  // get all users
  static getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();

    res.status(200).send({
      success: true,
      results: users.length,
      data: users,
    });
  });

  // create a new user
  static createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      // create a new user
      const newUser = new User(req.body);

      await newUser.save();
      res.status(200).json({
        success: true,
        msg: 'created user successfully',
        user: newUser,
      });
    } else {
      // User is already existing
      throw new CustomError(400, `User ${req.body.email} already exists`);
    }
  });
}

module.exports = Users;
