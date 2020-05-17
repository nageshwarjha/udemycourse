const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
//const logger = require('morgan');

const app = express();

const dbConfigs = require('./config/secrets');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser);
//app.use(logger('dev'));

mongoose.Promise = global.Promise;
mongoose.connect(dbConfigs.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const auth = require('./routes/authRouter');

app.use('/api/socioconn/', auth);

app.listen(3000, () => {
  console.log('Running ar port 3000');
});
