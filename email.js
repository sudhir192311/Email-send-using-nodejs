var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: 'sudhirswain120@gmail.com',
  to: 'sudhirswain122@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hii sudhir, how are u!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});