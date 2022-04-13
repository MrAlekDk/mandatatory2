import nodemailer from "nodemailer";


let testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth:{
        user: testAccount.user,
        pass: testAccount.pass
    }
});

function sendMail(email, subject, text){
    let message = {
        from: 'Sender Name <sender@example.com>',
        to: email,
        subject: subject,
        text: text,
        html: null
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }
    
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
}

export default{
    testAccount: testAccount,
    transporter: transporter,
    sendNewEmail: sendMail
}