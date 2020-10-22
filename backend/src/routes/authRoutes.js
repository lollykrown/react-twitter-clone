const express = require("express");
const authRouter = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const debug = require("debug")("app:authRoutes");

function router() {
  const {
    signUpWithEmail,
    signOut,
  } = userController();

  //sign up with email
  authRouter.route("/register").post(signUpWithEmail)

  //custom callback for logging in
  authRouter
    .route("/login")
    .post((req, res, next) => {
      passport.authenticate("local", (err, user, info) => {
        console.log(info);
        if (err) {
          console.log(err)
          return next(err);
        }
        if (!user) {
          return res.status(400).json({
            message: info.message,
            error: "Cannot log in",
          });
        }
        // if (!user) { return res.render('404'); }
        req.logIn(user, function (err) {
          if (err) {
            console.log(err)
            //logger.error(err)
            return next(err);
          }
          console.log(req.headers.cookie);
          return res.status(200).json({status:true,message:'logged in',user, cookie:req.header.cookie});
        });
      })(req, res, next);
    });

  authRouter.route("/logout").get(signOut);

  return authRouter;
}

module.exports = router;