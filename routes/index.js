var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Jamie Shannon'});
});

/* Get contact page */
router.get('/contact', function (req, res, next) {
    res.render('contact', {title: 'Contact', message: ''});
});

/* POST contact page */
/* Tips for set-up taken from the following sites:
 https://www.npmjs.com/package/nodemailer
 http://blog.ragingflame.co.za/2012/6/28/simple-form-handling-with-express-and-nodemailer
 */
// router.post('/contact', function(req, res, next){
//     var nodemailer = require('nodemailer');
//     var mail, transporter;
//
//     //set up mail transporter
//     transporter = nodemailer.createTransport('smtps://jamie.c.shannon@gmail.com:password');
//
//     //set up the mail
//     mail = {
//         from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab information from the form
//         to: 'jamie.c.shannon@gmail.com',
//         subject: 'Portfolio website contact',
//         text: req.body.message
//     };
//
//     transporter.sendMail(mail, function (error, response){
//         //if the email doesnt send give message feedback
//         if (error){
//             res.render('contact', {title: 'Contact', message: error, err: true, page:'contact'})
//         }
//         //if the email did send, indicate that the message was sent
//         else {
//             res.render('contact', {title: 'Contact', message: 'Message sent.', err: false, page: 'contact'})
//         }
//     });
// });

/* POST contact page */
router.post('/contact', function(req, res, next){
    res.render('contact', {title: 'Contact', message: ''});
});

/* Get about page*/
router.get('/about', function (req, res, next) {
    res.render('about', {title: 'About Me'});
});

/* Get projects page */
router.get('/projects', function (req, res, next){
    res.render('projects', {title: 'Projects'});
});

/* Get services page */
router.get('/services', function (req, res, next){
    res.render('services', {title: 'Services'});
});



module.exports = router;
