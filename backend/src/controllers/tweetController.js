const debug = require('debug')('app:tweetController');
const User = require('../models/users')
const Tweet = require('../models/tweet')
// const moment = require('moment')


function tweetController() {
  function isUserSignedIn(req, res, next) {
    if (req.user) {
      console.log(req.isAuthenticated())
<<<<<<< HEAD
      debug('You are logged in')
      debug(req.cookies)
=======
      console.log('You are logged in')
      console.log(req.cookies)
>>>>>>> 96d68af9a464e66e6daf7bcda19c20e99c063a18
      next();
    } else {
      // You are not logged in
      console.log('You need to log in first')
      res.json({ message: 'You need to log in first' })
    }
  }
  function postTweet(req, res) {
    (async function post() {
      try {
        let { tweet, image, video } = req.body;
        req.user && console.log(req.user)
        const us = await User.findOne({ username: 'nazarite_' }).exec()
        console.log(us)

        const twit = new Tweet({ tweet, image, video, user: us._id })
        const lu = await twit.save()

        res.status(200).json({
          status: true,
          message: 'tweet sent',
          data: lu
        })
      } catch (err) {
        debug(err.stack)
      }
    }());
  }

  function getAllTweets(req, res) {
    (async function get() {
      try {
<<<<<<< HEAD
        req.user &&console.log(req.user)
=======
        (req.user) &&console.log('rout',req.user)
>>>>>>> 96d68af9a464e66e6daf7bcda19c20e99c063a18
        
        const tweets = await Tweet.find({})
          .sort({createdAt:-1})
          .populate({ path: 'user', select: '-_id -email -password' })
          .exec()
        
<<<<<<< HEAD
        //console.log('tweet', tweets)
=======
        // console.log('tweet', tweets)
>>>>>>> 96d68af9a464e66e6daf7bcda19c20e99c063a18
        
        return res.status(200).json(tweets)

      } catch (err) {
        debug(err.stack)
      }
    }());
  }

  function getTweetsByUser(req, res) {
    (async function get() {
      try {
        Tweet.find({ user: req.user._id }).exec()
          .then(docs => res.json(docs))
          .catch(err => debug(`Oops! ${err}`))
      } catch (err) {
        debug(err.stack)
      }
    }());
  }

  function updateTweetById(req, res) {
    (async function update() {
      let { subject, time, tutor, level } = req.body
      try {
        Tweet.findByIdAndUpdate({ _id: req.params.id }, { $set: { subject, time, tutor, level } }, { new: true }).exec()
          .then(docs => res.status(200).json(docs))
          .catch(err => debug(`Oops! ${err.stack}`))
      } catch (err) {
        debug(err.stack)
      }
    }());
  }

  function deleteTweetById(req, res) {
    (async function del() {
      try {
        Tweet.findByIdAndDelete({ _id: req.params.id }).exec()
          .then(docs => res.status(204).json({
            status: true,
            message: `${docs.subject} lesson by ${docs.tutor} deleted`,
          }))
          .catch(err => debug(`Oops! ${err.stack}`))
      } catch (err) {
        debug(err.stack)
      }
    }());
  }

  return {
    isUserSignedIn,
    postTweet,
    getAllTweets,
    getTweetsByUser,
    updateTweetById,
    deleteTweetById,
  };
}

module.exports = tweetController