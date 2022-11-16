//Import Services
const videoServices = require('../Services/videos.services');

//Get All Videos
const getAllVideos = async (req, res, next) => {
  try {
    const result = await videoServices.getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
//Create Video
const createVideo = async (req, res, next) => {
  try {
    const newVideo = req.body
    const result = await videoServices.createVideo(newVideo);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({
      messages: '<-!!!Check Information - Something Wrong!!!->',
      error: err.message,
    })
  }
};

//Delete Video
const deleteVideo = async (req, res, next) => {

  try {
    const { video } = req;

    await videoServices.deleteVideo(video);
    res.status(200).json({
      status: 'success',
      message: '<-!VIDEO DELETED!->',
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createVideo, getAllVideos, deleteVideo }