// require monggose module
var mongoose = require('mongoose');
// require chalk module
var chalk = require('chalk');
// require URL property file
var dbURL = require('./property.js').DB;

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

// export this function and imported by server.js
module.exports = function () {
    mongoose.connect(dbURL);

    mongoose.connection.on('connected', function () {
        console.log(connected("Monggose default connection open to ", dbURL));
    });

    mongoose.connection.on('error', function () {
        console.log(error("Monggose default connection has occured " + err + " error"));
    });

    mongoose.connection.on('disconnected', function () {
        console.log(disconnected("Monggose default connection is disconnected"));
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log(termination("Monggose default connection due to application termination"));
            process.exit(0);
        });
    });

}