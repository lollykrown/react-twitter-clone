const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');
const debug = require('debug')('app:root')
const Logger = require('./src/utils/logger')
// import cors from 'cors';
// import passport from 'passport';

const app = express();

// set up winston logger
const log = new Logger('app_root');

// require('dotenv').config()

// mongoose.connect(process.env.DB_DEV_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
// const db = mongoose.connection;

// app.set('trust proxy', 1);
// const sessionOptions = {
//   saveUninitialized: false,
//   resave: false,
//   secret: process.env.SECRET,
//   cookie: {
//     //secure: true,
//     path: '/',
//     httpOnly: true,
//     maxAge: 600000 // 60 x 1000sec
//   },
//   store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   name: 'id'
// }

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   log.info(`Connected to MongoDB: ${db.host}`);
//   debug(`Connected to MongoDB: ${db.host}`);
// });

// Set up CORS
// app.use(cors());

// app.use(session(sessionOptions));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// API
// app.use('/', userController);
// app.use('/mailing', mailingController);

const port = process.env.PORT || 5000
app.listen(port, function () {
  log.info('Listening on port ...',port)
  debug(`Listening on port ${port}...`)
})
