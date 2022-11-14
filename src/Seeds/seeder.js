//Import DataBase
const db = require('../Utils/database');

//Import Models
const initModels = require('../Models/initModels');
const Users = require('../Models/Users.models');
const Courses = require('../Models/Courses.models');
const Categories = require('../Models/Categories.models');
const Videos = require('../Models/Videos.models');
const userCourses = require('../Models/userCourses.model');

//To Fullfill the DataBase
initModels();
const users = [
  {
    first_name: 'Jhon', last_name: 'Espitia',
    password: '1234',
    email: 'jhon@mail.com'
  },
  {
    first_name: 'Luisa', last_name: 'Nieto',
    password: '56789',
    email: 'LN@mail.com'
  },
  {
    first_name: 'Charlie', last_name: 'Zach',
    password: '9876',
    email: 'Chaza@mail.com'
  },
];

const courses = [
  {
    title: 'Programing', description: 'Learn how to program',
    instructor: 'Ian Rosas',
  },
  {
    title: 'Cooking', description: 'Learn how to cook',
    instructor: 'Martha Diaz',
  },
  {
    title: 'Advance English', description: 'Learn English Easy',
    instructor: 'Jack Ryan',
  }
];

const categories = [
  { name: 'Front End', course_id: 1 },
  { name: 'Fast Food', course_id: 2 },
  { name: 'General Verbs', course_id: 3 },
  { name: 'Back End', course_id: 1 },
  { name: 'Salads', course_id: 2 },
];

const videos = [
  { title: 'Using Node.js', url: 'www.youtube.com', course_id: 1 },
  { title: 'Using React', url: 'www.youtube.com', course_id: 1 },
  { title: 'making Salads', url: 'www.youtube.com', course_id: 2 },
  { title: 'Fast Reading', url: 'www.youtube.com', course_id: 2 },
  { title: 'Pronunciation', url: 'www.youtube.com', course_id: 3 },
];

const usersCourses = [
  { user_id: 1, course_id: 1 },
  { user_id: 2, course_id: 2 },
  { user_id: 3, course_id: 3 },
  { user_id: 1, course_id: 2 },
  { user_id: 2, course_id: 1 },
  { user_id: 2, course_id: 3 },
  { user_id: 3, course_id: 1 },
];


//Synced DataBase
db.sync({ force: true }) //true - delete all and create new info
  .then(async () => {
    console.log('Updating Information');

    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 100);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 200);

    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 300);

    setTimeout(() => {
      usersCourses.forEach((userCourse) => userCourses.create(userCourse));
    }, 400);
  });


