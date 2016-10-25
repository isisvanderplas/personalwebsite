var express = require('express');
var pug = require('pug');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var morgan = require('morgan');

console.log(process.env.PERSONAL_WEBSITE_EMAIL_ADDRESS);

var transporter = nodemailer.createTransport('smtps://nycdaamswdi%40gmail.com:nycdarocks@smtp.gmail.com');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.get('/', (req, res)=> {
  console.log('requesting home page');
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res)=> {
  console.log('requesting contactpage');
  res.sendFile(__dirname + '/contact.html');
});

app.post('/send-email', (req, res)=> {
  console.log('HTTP requestbody was: ');
  console.log(req.body);

  transporter.sendMail({
    from: '"' + request.body.fullName + ' 👥" <' + request.body.emailAddress + '>',
    to: 'nycdaamswdi@gmail.com'
    subject: 'Email received from Personal Website',
    text: req.body.content + '\n Reference Email of the sender is: ' +
    req.body.emailAddress  + '\n Reference Full Name of the sender is: ' + req.body.fullName
  }, (error, info) => {
      if (error) {
      return console.log(error);
    }
     console.log('Message sent: ' + info.res);
  });

  res.redirect('/');
});

app.listen(3000, ()=> {
  console.log('app.js is running on port 3000');
});
