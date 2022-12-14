const nodemailer = require('nodemailer');

 // Envoyer mail 
const sendEmail = (req, res, next) => {          
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'codeuralexis@gmail.com',
            pass: 'sklfqjxwoitffwva'
        }
    });
    var message = "Email expéditeur: " + req.body.email + "<br>Messages : " + req.body.message ;
    var mailOptions = {
        from: req.body.email,
        to: 'codeuralexis@gmail.com',
        subject: req.body.subject,
        html: message
    };
    transporter.sendMail(mailOptions, (err, infos)=>{
        if (err) {
            console.log(err);
            res.render('contact', {
                title: "Contact Page", 
                error: "Votre message n'a pas été envoyé. Merci de réessayer plus tard."
            });
            next();
        } else{
            console.log(infos);
            res.render('contact', {
                title: "Contact Page", 
                success: "Votre message a été envoyé. Nous reviendrons vers vous prochainement."
            });
            next();
        }
    })
}

module.exports = sendEmail;