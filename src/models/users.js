const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');

const usersSchema = new Schema({
	email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: true,
    lowercase: true,
    unique: true,
  },
	password: {
    type: String,
    required: [true, "Please enter your password"]
  },
  username: {
    type: String,
    required: [true, "Please enter your username"],
    trim: true,
    unique: true,
  },
  profileName: {
    type: String,
    required:true
  },
  bio:{
    type:String,
  },
  profilePictureUrl: {
    type: String,
    default:'https://via.placeholder.com/150/1da1f2/808080%20?Text=lollykrown.xyz'
  },
  backdropUrl:{
    type:String,
    default:'https://via.placeholder.com/400/1da1f2/808080%20?Text=lollykrown.xyz'
  },
  followers: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  followersCount: {
    type: Number,
    default: 0,
  },
  followingCount: {
    type: Number,
    default: 0,
  },
  following: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  tweetsCount:{
    type:Number,
    default:0
  },
  website: {
    type:String
  },
  birthDate: {
    type:String
  },
  dateJoined:{
    type:Date,
    default:Date.now()
  }
}, { paranoid: true, }, {timestamps: true})

usersSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'))
  } else {
    next()
  }
})

usersSchema.methods.validPassword = function(password){
  bcrypt.compare(password, this.password).then(valid => {
   // if (!valid) {
    //   return done(null, false, {
    //     message: 'Incorrect username or password'
    //   })
    // }
    return valid;
  }).catch(err => debug(err))
}

module.exports = mongoose.model( 'User', usersSchema )