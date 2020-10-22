const express = require('express')
const tweetRouter = express.Router()
const tweetController = require('../controllers/tweetController')

function router() {

    const { isUserSignedIn, postTweet, getAllTweets, getTweetsByAUser,updateLikesById,updateRetweetsById,
        deleteTweetById, } = tweetController()

    // Check if user is logged in 
    tweetRouter.use(isUserSignedIn);

    tweetRouter.route('/compose/tweet')
        // create park
        .post(postTweet)
    tweetRouter.route('/tweets')
        // retrieve all parks
        .get(getAllTweets)

    tweetRouter.route('/tweet/likes/:id')
        // add likes
        .post(updateLikesById)
        
    tweetRouter.route('/tweet/retweets/:id')
        // add likes
        .post(updateRetweetsById)
        // delete a park by id
        .delete(deleteTweetById)

    tweetRouter.route('/tweets/:id')
        // get a park by owner id
        .get(getTweetsByAUser)
    return tweetRouter
}

module.exports = router