const express = require('express');
const {History} = require("../models/history.model.js");
const router = express.Router();

router.route("/")
.get(async (req, res, next) => {
  try{
    const history = await History.find({})
    res.json({success: true, history})
  } catch(err) {
    res.status(500).json({success: false, message: "Unable fetch Like items", err})
  }
}) 
.post(async (req, res, next) => {
  try{
    let historyItem = req.body;
    let NewHistoryItem = new History(historyItem);
    let savedHistoryItem = await NewHistoryItem.save();
    res.json({success: true, savedHistoryItem})
    next();
  } catch(err) {
    console.log(err)
    res.status(500).json({success: false, message: "Unable to save it to Database"})
  }
})

.delete(async (req, res) => {
  try{
    let deleted = histories.remove();
    res.json({success: true, deleted})
  } catch(err) {
    console.log(err)
  }
})

module.exports = router;