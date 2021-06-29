const mongoose = require("mongoose")

const WishlistSchema =  new mongoose.Schema({
  id: {
    type: String,
    required: "Cannot enter video without id"
  },
  title: {
    type: String,
    required: "Cannot enter video without name"
  },
  image: {
    type: String,
    required: "Cannot enter video without image"
  },
  url: {
    type: String,
    required: "Cannot enter video without url"
  }
},
{
  timestamps: true,
})

const Wishlist = mongoose.model("Wishlist", WishlistSchema)

module.exports = {Wishlist}