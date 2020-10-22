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
    default:0
  },
  likes: {
    type: Number,
    default:0
  },
  comments: {
    type: Number,
    default:0
  },
  createdAt:{
    type: Date,
    default: Date.now()
  }
}, { paranoid: true, }, {timestamps: true})

module.exports = mongoose.model( 'Tweets', tweetsSchema )