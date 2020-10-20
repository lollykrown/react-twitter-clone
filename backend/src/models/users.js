const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');

const usersSchema = new Schema({
	email: {
    type: String,
    unique: true,
  },
	password: {
    type: String,
    required:true
  },
  username: {
    type: String,
    unique: true,
    required:true
  },
  profileName: {
    type: String,
    required:true
  },
  profilePictureUrl: {
    type: String,
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

module.exports = mongoose.model( 'Users', usersSchema )