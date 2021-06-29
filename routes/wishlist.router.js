const express = require('express')
const {Wishlist} = require("../models/wishlist.model.js");
const router = express.Router();

router.route("/")
.get(async (req, res, next) => {
  try{
    const wishlist = await Wishlist.find({})
  }
  catch(err){
    res.status(500).json({success: false, message:"An error occurred while fetching wishlist items", err})
  }
})

.post(async (req, res, next) => {
  try{
    let wishlistItem = req.body;
    let NewWishlistItem = new Wishlist(wishlistItem.video)
    let savedWishlistItem = await NewWishListItem.save()
    res.json({success: true, wishlistItem: savedWishlistItem})
  }
  catch(err){
    res.status(500).json({success: false, message:"An error occurred while adding items to wishlist", err})
  }
})

module.exports = router;