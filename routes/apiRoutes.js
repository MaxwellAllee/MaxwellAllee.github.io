var db = require("../models");
var nodemailer = require('nodemailer');
var message=""
var error =""
module.exports = function(app) {
    app.post("/api/email", function(req, res) {
      message = req.body.message
        
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAILADD,
          pass: process.env.EMAILPASS
        }
      });
      
      var mailOptions = {
        from: process.env.EMAILADD,
        to: process.env.EMAILSEND,
        subject: 'Email from Maxallee.com',
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return res.json("500")
        } else {
          console.log('Email sent: ' + info.response);
          return res.json(200);
        }
      });
    })
  
}
