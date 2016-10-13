var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Jamie Shannon', message: ''});
});

/* Get contact page */
router.get('/contact', function (req, res, next) {
    res.render('contact', {title: 'Contact', message: ''});
});

/* Get about page*/
router.get('/about', function (req, res, next) {
    res.render('about', {title: 'About Me', message: ''});
});

/* Get projects page */
router.get('/projects', function (req, res, next){
    res.render('projects', {title: 'Projects', message: ''});
});

/* Get services page */
router.get('/services', function (req, res, next){
    res.render('services', {title: 'Services', message: ''});
});

module.exports = router;
