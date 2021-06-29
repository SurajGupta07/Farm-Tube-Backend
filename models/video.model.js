const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
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
  },
  isLiked: {
    type: Boolean,
    required: "Cannot enter video without isLiked"
  },
  isSaved: {
    type: Boolean,
    required: "Cannot enter video without isSaved"
  }
},
{
  timestamps: true,
})

const Video = mongoose.model("Video", VideoSchema)

module.exports = { Video }