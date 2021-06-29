const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "Cannot enter video without id"
  },
  image: {
    type: String,
    required: "Cannot enter video without image"
  },
  title: {
    type: String,
    required: "Cannot enter video without title"
  },
  url: {
    type: String,
    required: "Cannot enter video without url"
  }
},
{
  timestamps: true,
})

const Like = mongoose.model('Like', LikeSchema);

module.exports = {Like}