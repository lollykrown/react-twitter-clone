const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetsSchema = new Schema({
	text: {
    type: String,
    unique: true,
    required:true
  },
  image: {
    type: String,
  },
	video: {
    type: String,
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  retweets: {
    type: Number,
    required:true
  },
  likes: {
    type: Number,
    required:true
  },
  comments: {
    type: Number,
    required:true
  }
}, { paranoid: true, }, {timestamps: true})

module.exports = mongoose.model( 'Tweets', tweetsSchema )