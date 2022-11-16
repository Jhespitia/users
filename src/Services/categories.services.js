//Import Models to Use
//const Users = require('../Models/users.models');
//const Courses = require('../Models/courses.models');
const Categories = require('../Models/categories.models');
//const Videos = require('../Models/videos.models');
//const usersCourses = require('../Models/userCourses.model');

class CategoryServices {

  static async getAll() {
    try {
      const result = await Categories.findAll({
        attributes: [
          'id',
          'name']
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createCategory(newCategory) {
    try {
      const result = await Categories.create(newCategory);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async deleteCategory() {
    try {
      const result = await Categories.destroy({
        where: {
          id: id
        }
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CategoryServices;