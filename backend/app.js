const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');
const debug = require('debug')('app:root')
const MongoStore = require('connect-mongo')(session);
const cors = require('cors')

const app = express();

// set up winston logger
// const log = new Logger('app_root');

require('dotenv').config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
const db = mongoose.connection;

// app.set('trust proxy', 1);

const sessionOptions = {
  saveUninitialized: false,
  resave: false,
  secret: process.env.SECRET,
  cookie: {
    //secure: true,
    path: '/',
    httpOnly: true,
    maxAge: 600000 // 60 x 1000sec
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  name: 'id',
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // log.info(`Connected to MongoDB: ${db.host}`);
  console.log(`Connected to MongoDB: ${db.host}`);
});

// Set up CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'DELETE','HEAD'],
  credentials: true,
  allowedHeaders: "Content-Type, Authorization, X-Requested-With",

  // "preflightContinue": false,
  // "optionsSuccessStatus": 204,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
 }

app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionOptions));

require('./src/config/passport.js')(app);

// API
const authRouter = require('./src/routes/authRoutes')();
const userRouter = require('./src/routes/userRoutes')();
const tweetRouter = require('./src/routes/tweetRoutes')();

app.get('/', function (req, res) {
  res.send('welcome');
});

app.use('/', authRouter);
app.use('/', tweetRouter);
app.use('/', userRouter);

const port = process.env.PORT || 5000
app.listen(port, function () {
  // log.info('Listening on port ...',port)
  console.log(`Listening on port ${port}...`)
})
