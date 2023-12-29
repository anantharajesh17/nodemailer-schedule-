const nodemailer = require('nodemailer');
// const cron = require('node-cron');
const express = require('express');
app = express();
const port = 6000
let mailOptions = {
  from: 'anantharajesh12@gmail.com',
  to: 'ssam3194@gmail.com',
  subject: 'Email from Node-App: A Test Message!',
  text: 'hai all today adthiya l1 lunch time 11.50am',
  html: '<h1>hello everyone is nodemailer app</h1>'
};

// send config
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anantharajesh12@gmail.com',
    pass: 'nyjcukqkacoqpxcu',
  },
  tls: {
    rejectUnauthorized: false,
  },
});


//time fixer
// cron.schedule('* * * * *',() => {
//   console.log('------------success---------------');
//   console.log('Running Cron Process');
//   // reciver config
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
  });
// });

app.listen(port,()=>{
  console.log(`server runing on link http://localhost:${port}`);
});