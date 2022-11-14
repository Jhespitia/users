//Import Services
const UserServices = require('../Services/users.services');

//Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

//Get User by Id
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

//Get User Courses 
const getUserCourses = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinCourses(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

//Create User
const createUser = async (req, res, next) => {
  try {
    const newUser = req.body
    const result = await UserServices.add(newUser);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({
      messages: '<-!!!Check Information - Something Wrong!!!->',
      error: err.message,
    })
  }
};

//Update User
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    const result = await UserServices.update(dataUpdate, id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserCourses,
  createUser,
  updateUser,
}