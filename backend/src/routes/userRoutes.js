const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const debug = require("debug")("app:userRoutes");

function router() {
  const { getUser, addFollowing } = userController();

  //sign up with email
  userRouter.route("/:username")
    .get(getUser)
  
  userRouter.route("/:username/following")
    .post(addFollowing)
    

  return userRouter;
}

module.exports = router;