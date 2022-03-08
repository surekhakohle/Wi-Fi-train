var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'surekhakohle@gmail.com',
    pass: 'surekha'
  }
});

var mailOptions = {
  from: 'surekhakohle@gmail.com',
  to: 'ufranpatel8291@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});