// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function mail(req, res) {
  require('dotenv').config();
  const nodemailer = require('nodemailer');
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.username,
      pass: process.env.password,
      clientId: process.env.clientID,
      clientSecret: process.env.clientSecret,
      refreshToken: process.env.refreshToken
    }
  });

  const mailConfigurations = {
  
    // It should be a string of sender email
    from: process.env.username,
      
    // Comma Separated list of mails
    to: 'saurabhdabas0@gmail.com',
  
    // Subject of Email
    subject: `Message is from ${req.body.name}`,
      
    // This would be the text of email body
    text: `${req.body.message}`
  };

  transporter.sendMail(mailConfigurations, function(error, info){
    if (error) throw Error(error);
       console.log('Email Sent Successfully');
    console.log(info);
  });
}