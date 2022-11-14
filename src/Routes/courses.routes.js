const { Router } = require("express");

const {
  addCourseToUser,
  getAllCourses,
  getCoursesFull,
  createCourse,
  updateCourse } = require('../Controllers/courses.controllers');

const coursesRouter = Router();

//To ADD  course to User ->()

//To GET all Courses 'name' ->(GET)
router.get('/courses', getAllCourses);

//To GET all Courses Full Info 'video-category' ->(GET)
router.get('/courses/:id', getCoursesFull);

//To create Course ->(POST)
router.post('/courses', createCourse);

//To update Course ->(PUT)
router.put('/courses', updateCourse);

module.exports = coursesRouter;