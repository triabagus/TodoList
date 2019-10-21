var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var heroSchema = new Schema({
    icon: {
        type: String,
        unique: false,
        required: true
    },
    sender: {
        type: String,
        unique: false,
        required: true
    },
    title: {
        type: String,
        unique: false,
        required: true
    },
    message: {
        type: String,
        unique: false,
        required: true
    }
});

module.exports = heroSchema;