const express = require('express')
const tweetRouter = express.Router()
const tweetController = require('../controllers/tweetController')

function router() {

    const { isUserSignedIn, postTweet, getAllTweets, getTweetsByUser,updateTweetById,deleteTweetById, } = tweetController()

    // Check if user is logged in 
    //tweetRouter.use(isUserSignedIn);

    tweetRouter.route('/compose/tweet')
        // create park
        .post(postTweet)
    tweetRouter.route('/tweets')
        // retrieve all parks
        .get(getAllTweets)
    tweetRouter.route('/tweets/:id')
        // get a park by owner id
        .get(getTweetsByUser)
    tweetRouter.route('tweet/:id')
        // get a park by id
        .get(getTweetsByUser)
        // update a park by id
        .patch(updateTweetById)
        // delete a park by id
        .delete(deleteTweetById)
    return tweetRouter
}

module.exports = router