//Import Models to Use
const Users = require('../Models/users.models');
const Courses = require('../Models/courses.models');
//const Categories = require('../Models/categories.models');
//const Videos = require('../Models/videos.models');
//const usersCourses = require('../Models/userCourses.model');

class UserServices {

  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: [
          'id',
          'first_name',
          'last_name',
          'email']
      }); // select * from users;
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: [
          'id',
          'first_name',
          'last_name',
          'email'],
      });
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getUserJoinCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ['first_name', 'last_name', 'email'],
        include: {
          model: Courses,
          //as: 'course',
          attributes: ['title'],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async add(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async update(updateData, id) {
    try {
      const result = await Users.update(updateData, {
        where: { id },
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserServices;