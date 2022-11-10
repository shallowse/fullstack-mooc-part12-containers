var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/places');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.disable('x-powered-by');

app.use('/', indexRouter);

module.exports = app;
