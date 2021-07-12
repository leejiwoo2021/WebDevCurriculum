import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as auth from './middleware/auth.js';
import dotenv from 'dotenv';
dotenv.config();
// import * as storage from './model/sequelize.js';
// storage.init();

import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import graphQlRouter from './routes/graphql.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/graphql', auth.verifyJWT, graphQlRouter);

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: express.Request, res: express.Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.send('error! no resources');
});

module.exports = app;

export default app;
