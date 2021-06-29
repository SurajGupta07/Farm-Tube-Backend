const express = require('express');
const { Video } = require('../models/video.model.js');
const router = express.Router();

router.route("/")
.get(async (req, res) => {
  try{
    const videos = await Video.find({})
    res.json({success: true, videos})
  } catch (err) {
    res.status(500).json({success: false, message: "Unnable to get videos", err})
  }
})
.post(async (req, res) => {
  try{
    const video = req.body;
    const NewVideo = new Video(video)
    const savedVideo = await NewVideo.save()
    res.json({success: true, video: savedVideo})
  }
  catch(err) {
    res.status(500).json({success: false, message: "Unable to add Video", err})
  }
})

module.exports = router;