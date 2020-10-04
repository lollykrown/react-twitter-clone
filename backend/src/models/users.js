const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');

const usersSchema = new Schema({
	email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true
  },
	password: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  profilePictureUrl: {
    type: String,
  },
  activated: {
    type: Boolean,
    default: false
  },
  pwdResetToken: {
    type: String
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

module.exports = mongoose.model( 'Users', usersSchema )