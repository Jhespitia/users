//Import Models to Use
//const Users = require('./users.models');
const Courses = require('../Models/courses.models');
const Categories = require('../Models/categories.models');
//const Videos = require('./videos.models');
//const usersCourses = require('./userCourses.model');

class CourseServices {

  static async getAll() {
    try {
      const result = await Courses.findAll({
        attributes: [
          'id',
          'title',
          'description',
          'instructor']
      }); // select * from users;
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async courseFull(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        attributes: [
          'id',
          'title',
          'description',
          'instructor'],
        include: {
          model: Categories,
          //as: 'categories',
          attributes: ['name'],
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createCourse(newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }

}
module.exports = CourseServices;