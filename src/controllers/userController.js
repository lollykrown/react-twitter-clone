const debug = require("debug")("app:userController");
const bcrypt = require("bcryptjs");
const User = require("../models/users");

function userController() {
  // Sign up with email address
  function signUpWithEmail(req, res) {
    (async function auth() {
      try {
        let { username, profileName, email, password, profilePictureUrl } = req.body;
        if (!username) {
          res.status(423).send({
            status: false,
            message: "Please provide your firstname",
          });
          return;
        }
        if (!profileName) {
          res.status(400).send({
            status: false,
            message: "Please provide your last name",
          });
          return;
        }
        if (!email) {
          res.status(423).send({
            status: false,
            message: "You must provide your email address",
          });
          return;
        }
        if (!password) {
          res.status(400).send({
            status: false,
            message: "Password is required",
          });
          return;
        }

        console.log(username, profileName, email, password)
        const user = await User.findOne({ username }).exec();
        if (user) {
          return res
            .status(423)
            .send({
              status: false,
              message:
                "An account with this username already exists",
            });
        }

        bcrypt
          .hash(password, 10)
          .then((password) => {
            const user = new User({
              email,
              password,
              username,
              profileName,
              profilePictureUrl
            });
            user.save().then((newUser) => {
              console.log(newUser);
            });
          })
          .then(() => {
            res.status(201).json({
              status: true,
              message:
                "You have been successfully registered,",
            });
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err.stack);
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    })();
  }

  // sign out
  function signOut(req, res) {
    req.logout();
    if (req.session) req.session.destroy();
    res.clearCookie("connect.sid");
    debug("you are now logged out");
    // app.use(function (req, res, next) {
    //   if (!req.user)
    //     res.header(
    //       "Cache-Control",
    //       "private, no-cache, no-store, must-revalidate"
    //     );
    //   next();
    // });
    res.json({ msg: "logged out" });
  }

  function getUser(req, res) {
    (async function auth() {
      try {
        let username = req.params.username;

        const user = await User.findOne({ username }).select('-_id -email -password').exec();
        if (!user) {
          return res
            .status(423)
            .send({
              status: false,
              message:
                "An account with this username does not exist",
            });
        }

        res.status(200).json({
          status: true,
          user
        });

      } catch (err) {
        console.log(err.stack);
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    })();
  }

  return {
    signUpWithEmail,
    signOut,
    getUser
  };
}

module.exports = userController;