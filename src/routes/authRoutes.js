const express = require("express");
const authRouter = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");

function router() {
  const {
    signUpWithEmail,
    signOut,
  } = userController();

  //sign up with email
  authRouter.route("/register").post(signUpWithEmail)

      // Signup/login with github
      authRouter.get('/github',
      passport.authenticate('github', { scope: ['read:user', 'user:email'] }))

  // The middleware receives the data from Github and runs the function on Strategy config
  authRouter.get('/github/callback', passport.authenticate('github'),
      (req, res) => {
          //res.send(req.user)
          res.status(200).json({ message: "you reached the redirect URI", user: req.user });
      });
 
  //custom callback for logging in
  authRouter
    .route("/login")
    .post((req, res, next) => {
      passport.authenticate("local", (err, user, info) => {
        // console.log('info', info);
        // if(!info.status){
        //   return res.json({
        //     status:false,
        //     message: info.message,
        //     error: "Cannot log in",
        //   });
        // }
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
          return res.status(200).json({status:true,message:'logged in',user});
        });
      })(req, res, next);
    });

  authRouter.route("/logout").get(signOut);

  return authRouter;
}

module.exports = router;