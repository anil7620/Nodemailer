
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:  process.env.EMAIL, // TODO: your gmail account
        pass:   process.env.PASSWORD // TODO: your gmail password
    }
});




const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: 'user@gmail.com', // TODO replace this with your own email
        to: email, // TODO: the receiver email has to be authorized for the free tier
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;


