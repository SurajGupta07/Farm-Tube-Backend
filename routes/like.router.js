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
    const wishlistItem = req.body;
    const NewWishlistItem = new Wishlist(wishlistItem.video);
    console.log(NewWishlistItem)
    const savedWishlistItem = await NewWishlistItem.save();
    res.json({ success: true, wishlistItem: savedWishlistItem })
  } catch(err) {
    res.status(500).json({success: false, message: 'unable to add products', err })
  }
})

module.exports = router;