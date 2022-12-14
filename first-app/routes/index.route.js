const express = require('express');

const contactValidator = require('../middlewraes/validators/contact.validator');
const sendEmail = require('../middlewraes/services/email.service');
const router = express.Router();

/* GET home page */
router.get('/', (req, res)=>{
    res.render('index', {title: "Home Page"});
});

/* GET contact page */
router.get('/contact',  (req, res)=>{
    res.render('contact', {title: "Contact Page"});
});

/* POST contact page */
router.post('/contact', contactValidator, sendEmail );

module.exports = router;