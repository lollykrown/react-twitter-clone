const debug = require("debug")("app:userController");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/users");
const Token = require("../models/tokens");
const token = require("../utils/token");
const mailer = require("../utils/mail");
const { generateNumber, generateString } = require("../utils/random")();
const sendSms = require("../utils/sms");
const validator = require("email-validator");

const validateEmail = (email) => {
  if (!validator.validate(email)) {
    return false;
  }
  return true;
};

function userController() {
  // Sign up with email address
  function signUpWithEmail(req, res) {
    (async function auth() {
      try {
        let { userName, profileName, email, phone, password } = req.body;
        if (!userName) {
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
        if (!phone) {
          res.status(423).send({
            status: false,
            message: "Please provide your phone number",
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
        let valid = validateEmail(email);
        if (!valid) {
          res.status(400).send({
            status: "failed",
            message: "Invalid email!",
          });
        }

        const user = await User.findOne({ email }).exec();
        if (user) {
          return res
            .status(423)
            .send({
              status: false,
              message:
                "An account with this email already exists",
            });
        }

        bcrypt
          .hash(password, 10)
          .then((password) => {
            const user = new User({
              email,
              phone,
              password,
              userName,
              profileName,
            });
            user.save().then((newUser) => {
              debug(newUser);
            });
          })
          .then(() => {
            res.status(201).json({
              status: true,
              message:
                "You have been successfully registered,",
            });
          })
          .catch((err) => debug(err));
      } catch (err) {
        debug(err.stack);
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
    res.redirect("/login");
  }

  return {
    signUpWithEmail,
    signOut
  };
}

module.exports = userController;