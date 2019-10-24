var express = require('express');
var path = require('path');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');

var properties = require('./config/property');
var db = require('./config/database');

// hero route
var herosRoutes = require('./api/heroes/heroes.routes');
var app = express();

// configurate bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({
    extended: true
});

// initialize express route
var router = express.Router();

// call the database connection function
db();

// configurate app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

//use express route
app.use('/api', router);

//call heros routing
herosRoutes(router);

// view engine setup
app.use('/css', express.static(path.join(__dirname, 'dist/css')));
app.use('/js', express.static(path.join(__dirname, 'dist/js')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// initial server
app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
});