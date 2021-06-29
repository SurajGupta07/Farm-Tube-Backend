const express = require('express');
const {Like} = require("../models/like.model.js");
const router = express.Router();

router.route("/")
.get(async (req, res, next) => {
  try{
    const like = await Like.find({})
    res.json({success: true, like})
  } catch(err) {
    res.status(500).json({success: false, message: "Unable fetch Like items", err})
  }
}) 
.post(async (req, res, next) => {
  try{
    let likeItem = req.body;
    let NewLikeItem = new Like(likeItem);
    let savedLikeItem = await NewLikeItem.save();
    res.json({success: true, savedLikeItem})
  } catch(err) {
    res.status(500).json({success: false, message: "Unable to save it to Database"})
  }
})

module.exports = router;