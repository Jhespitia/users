//Import Models to Use
//const Users = require('../Models/users.models');
//const Courses = require('../Models/courses.models');
//const Categories = require('../Models/categories.models');
const Videos = require('../Models/videos.models');
//const usersCourses = require('../Models/userCourses.model');

class VideoServices {

  static async getAll() {
    try {
      const result = await Videos.findAll({
        attributes: [
          'id',
          'title',
          'url'],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createVideo(newVideo) {
    try {
      const result = await Videos.create(newVideo);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async deleteVideo() {
    try {
      const result = await Videos.destroy({
        where: {
          id: 1
        }
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = VideoServices;