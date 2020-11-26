const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const tweetController = require("../controllers/tweetController");
const debug = require("debug")("app:userRoutes");

function router() {
  const { getUser } = userController();
  const { isUserSignedIn } = tweetController()

  userRouter.use(isUserSignedIn);

  //sign up with email
  userRouter.route("/:username").get(getUser)

  return userRouter;
}

module.exports = router;