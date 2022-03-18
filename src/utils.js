const transport = require("./config/mail")
//In es6 syntx value of key in not required when they name of key and value is same
const sendMail = async ({from , to, subject, text, html}) =>{
    await transport.sendMail({
    from,
    to,
    subject,
    text,
    html,
    }); 
}
const VerificationMail = async ({from , to, user}) =>{
    await sendMail({
    from,
    to,
    subject : `${user.first_name} ${user.last_name} Verify you credentials`,
    text : `${user.first_name} ${user.last_name} Verification email`,
    html : `${user.first_name} ${user.last_name} <h1>Verifiaction email</h1>`,
    }); 
}
const WelcomeMail = async ({from , to, user}) =>{
    await sendMail({
    from,
    to,
    subject : ` ${user.first_name} ${user.last_name} Successfully verified your email`,
    text : ` ${user.first_name} ${user.last_name} you are verified now`,
    html : `${user.first_name} ${user.last_name} <h1>Credentials verified</h1>`,
    }); 
}
var to = ["admin1@masai.com", "admin2@masai.com", "admin3@masai.com", "admin4@masai.com" ,"admin5@masai.com"];
const AdminMail = async ({from, user}) =>{
   for(var i=0; i<to.length; i++){
    await sendMail({
        from,
        to : to[i],
        subject : `${user.first_name} ${user.last_name} has registered with us`,
        text : `Please welcome ${user.first_name} ${user.last_name}`,
        html : `<h1>Credentials verified</h1>`,
        }); 
   }
}
module.exports = { VerificationMail, WelcomeMail, AdminMail};