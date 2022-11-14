//Import Models
const Users = require('./users.models');
const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');
const usersCourses = require('./userCourses.model');

//Create realations between Models
const initModels = () => {

  //Users - Courses
  Users.hasMany(Courses, { as: 'users', foreignKey: 'user_id' });
  Courses.belongsTo(Users, { as: 'course', foreignKey: 'user_id' });

  //userCourses - Users - Courses
  usersCourses.belongsTo(Users, { as: 'user_course', foreignKey: 'user_id' });
  usersCourses.belongsTo(Courses, { as: 'course_user', foreignKey: 'course_id' });

  //Categories - Courses
  Categories.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' });
  Courses.hasMany(Categories, { as: 'categories', foreignKey: 'course_id' });

  //Videos - Courses
  Videos.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' });
  Courses.hasMany(Videos, { as: 'videos', foreignKey: 'course_id' })
};

module.exports = initModels;