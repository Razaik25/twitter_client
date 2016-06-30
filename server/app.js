// Module dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

// Port number
const port = 3000;

// invoking express server
const app = express();


app.set('port', port);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Server setup 
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});
