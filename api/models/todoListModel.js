'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        Required: 'Enter your name.'
    },
    surname: {
        type: String,
        Required: 'Enter your surname.'
    },
    password: {
        type: String,
        Required: 'Enter password'
    },
    tc: {
        type: Number,
        Required: 'Enter your national identity number.'
    },
    date_registered: {
        type: Date,
        default: Date.now
    },
    birth_date: {
        type: Date,
        default: Date.now
    },
    is_admin: {
        type: [{
            type: Boolean,
            enum: [true, false]
        }],
        default: [false]
    },
    is_deleted: {
        type: [{
            type: Boolean,
            enum: [true, false]
        }],
        default: [false]
    }
});

module.exports = mongoose.model('Users', UserSchema);