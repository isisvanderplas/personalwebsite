const express = require('express');
      morgan = require('morgan');
      nodemailer = require('nodemailer');
      bodyParser = require('body-parser');
      pug = require('pug');

console.log(process.env.PERSONAL_WEBSITE_EMAIL_ADDRESS);

var app = express(),
  transporter = nodemailer.createTransport(
    'smtps://' + process.env.PERSONAL_WEBSITE_EMAIL_ADDRESS + ':' +
    process.env.PERSONAL_WEBSITE_EMAIL_ADDRESS + '@smtp.gmail.com'
  );

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
