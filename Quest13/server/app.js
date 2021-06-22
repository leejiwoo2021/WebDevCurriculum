const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const auth = require('./middleware/auth');
require('dotenv').config();
const storage = require('./model/sequelize');
storage.init();

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const graphQlRouter = require('./routes/graphql');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/graphql', auth.verifyJWT, graphQlRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.send('error! no resources');
});

module.exports = app;
