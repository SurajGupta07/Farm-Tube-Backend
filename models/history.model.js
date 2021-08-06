const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  id: {
    type: String
  },
  image: {
    type: String  
  },
  title: {
    type: String
  },
  url: {
    type: String
  }
},
{
  timestamps: true,
})

const History = mongoose.model('History', HistorySchema);

module.exports = {History}