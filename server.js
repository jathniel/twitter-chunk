'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';

import router  from './config/routes';

mongoose.connect('mongodb://localhost:27017/twitter');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


app.use('/api', router);

app.listen(port);
console.log('Listening ' + port);
export default app;
