//Import Services
const UserServices = require('../Services/courses.services');

//Add Course to User

//Get All Courses
const getAllCourses = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

//Get Course Full Information 
const getCoursesFull = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.courseFull(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const createCourse = async (req, res, next) => {
  try {
    const newCourse = req.body
    const result = await UserServices.createCourse(newCourse);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({
      messages: '<-!!!Check Information - Something Wrong!!!->',
      error: err.message,
    })
  }
};

const updateUser = async (req, res, next) => { }

module.exports = {
  getAllCourses,
  getCoursesFull,
  createCourse
}