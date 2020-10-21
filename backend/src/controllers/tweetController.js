const debug = require('debug')('app:tweetController');
const User = require('../models/users')
const Tweet = require('../models/tweet')
// const moment = require('moment')


function tweetController() {
  function isUserSignedIn(req, res, next) {
    if (req.user) {
      debug(req.isAuthenticated())
      debug('You are logged in')
      debug(req.cookies)
      next();
    } else {
      // You are not logged in
      debug('You need to log in first')
      res.json({ message: 'You need to log in first' })
    }
  }
  function postTweet(req, res) {
    (async function post() {
      try {
        let { tweet, image, video } = req.body;

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
        
        const tweets = await Tweet.find({})
          .sort({createdAt:-1})
          .populate({ path: 'user', select: '-_id -email -password' })
          .exec()
        
        console.log('tweet', tweets)
        
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