const express = require('express');
const initModels = require('./Models/initModels');
const handleError = require('./Middlewares/error');

//Import Endpoints
const userRouter = require('./Routes/users.routes');
const courseRouter = require('./Routes/courses.routes');
const videoRouter = require('./Routes/videos.routes');
const categoryRouter = require('./Routes/categories.routes');

//Import Dotevn
require('dotenv').config();

//Import DataBase
const db = require('./Utils/database');

const app = express();

const PORT = process.env.PORT || 7000;

//Authenticate DataBase
db.authenticate()
  .then(() => console.log('***!DataBase Authenticated!***'))
  .catch((err) => console.error(err));

//Synced DataBase
db.sync({ force: false })
  .then(() => console.log('***!DataBase Synced!***'))
  .catch((err) => console.error(err));

initModels();

app.get('/', (req, res, next) => {
  res.status(200).json('<-!Connected -All Good!->');
  next();
});

//Enable Express to recieve Json data 
app.use(express.json());

//EndPoints - Users
app.use('/api/v1/users', userRouter);
//EndPoints - Courses
app.use('/api/v1/courses', courseRouter);
//EndPoints - Categories
app.use('/api/v1/categories', categoryRouter);
//EndPoints - Videos
app.use('/api/v1/videos', videoRouter);


//Handle errors
//app.use(handleError);

//Catch Error NON-existing Endpoint
app.all('*', (req, res) => {
  res.status(404).json({
    status: '!-> FAIL <-!',
    message: `${req.method} ${req.url} The URL you request does not exist in our server`,
  })
});

module.exports = { app }


app.listen(PORT, () => console.log('<-!Server Running on PORT' + ' ' + PORT + '!->'));
