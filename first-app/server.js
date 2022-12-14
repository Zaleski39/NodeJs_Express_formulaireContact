const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index.route');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Moteur temmplate twig
app.set("view engine", "twig")

// Permet d'accéder au dossier publi
app.use(express.static('public'));


app.use((req, res, next)=>{
    req.message = "Message middelware";
    next();
})

// Système de routage => index.route.js
app.use('/', indexRouter)

app.listen(port, () =>{
    console.log(`app listening at http://localhost:${port}`);
})