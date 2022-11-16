const express = require("express");

//Import Controllers
const {
  getAllUsers,
  getUserById,
  getUserCourses,
  createUser,
  updateUser } = require('../Controllers/users.controllers');

//const userRoutes = Router();
const userRouter = express.Router();

//To GET All USERS
userRouter.get('/', getAllUsers)

//To Get Users by Id ->(GET)
userRouter.get('/:id', getUserById);

//To get User Courses ->(GET)
userRouter.get('/:id/courses', getUserCourses);

//To create User ->(POST)
userRouter.post('/', createUser);

//To update User ->(PUT)
userRouter.put('/:id', updateUser);

module.exports = userRouter;


