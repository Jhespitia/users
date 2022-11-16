const express = require("express");

const {
  addCourseToUser,
  getAllCourses,
  getCoursesFull,
  createCourse,
  updateCourse } = require('../Controllers/courses.controllers');
//const courseRouter = Router();
const courseRouter = express.Router();

//To ADD  course to User ->()

//To GET all Courses 'name' ->(GET)
courseRouter.get('/', getAllCourses);

//To GET all Courses Full Info 'video-category' ->(GET)
courseRouter.get('/:id', getCoursesFull);

//To create Course ->(POST)
courseRouter.post('/courses', createCourse);

//To update Course ->(PUT)
//courseRouter.put('/courses', updateCourse);

module.exports = courseRouter;