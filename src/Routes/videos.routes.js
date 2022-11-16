const express = require("express");

//Import Controllers
const {
  getAllVideos,
  createVideo,
  deleteVideo } = require('../Controllers/videos.controllers');

const videoRouter = express.Router();

//To Get All Videos
videoRouter.get('/', getAllVideos);

//To create Category ->(POST)
videoRouter.post('/', createVideo);

//To delete Category ->(DELETE)
videoRouter.delete('/:id', deleteVideo);


module.exports = videoRouter;