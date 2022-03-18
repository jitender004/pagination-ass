const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "85c696998f0f9f",
      pass: "dd6be7ec8dee69"
    }
  });
//  transport;