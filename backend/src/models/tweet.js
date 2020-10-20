const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetsSchema = new Schema({
	tweet: {
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  retweets: {
    type: Number,
  },
  likes: {
    type: Number,
  },
  comments: {
    type: Number,
  }
}, { paranoid: true, }, {timestamps: true})

module.exports = mongoose.model( 'Tweets', tweetsSchema )