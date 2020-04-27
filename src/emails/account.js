const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anthonycera@icloud.com',
        subject: 'Welcome!',
        text: `Welcome to the app, ${name}. Let me know how you like the app.` 
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anthonycera@icloud.com',
        subject: 'We are sorry to see you go',
        text: `Was there anything we could've done better to keep you ${name}?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}