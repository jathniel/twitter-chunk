'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import sassMiddleware from 'node-sass-middleware';
import router  from './config/routes';
import path from 'path';
mongoose.connect('mongodb://localhost:27017/twitter');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(sassMiddleware({
  src: path.join(__dirname, 'assets/styles'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'expanded'
}));

app.use('/', router);
app.use(express.static('public'));
app.listen(port);
export default app;
