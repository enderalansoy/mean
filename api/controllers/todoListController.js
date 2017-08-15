'use strict';

// mongoose models:

var mongoose = require('mongoose'),
    user = mongoose.model('Users'),
    vehicle = mongoose.model('Vehicles'),
    job = mongoose.model('Jobs'),
    usage = mongoose.model('Usages');

// user controllers: 

exports.list_all_users = function(req, res) {
    user.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create_a_user = function(req, res) {
    var new_user = new user(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.read_a_user = function(req, res) {
    user.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update_a_user = function(req, res) {
    user.findOneAndUpdate({ _id: req.params.userId },
        req.body, { new: true },
        function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
};

exports.delete_a_user = function(req, res) {
    user.remove({
        _id: req.params.userId
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'user successfully deleted' });
    });
};

exports.read_a_user_from_tc = function(req, res) {
    user.findOne({
        'tc': req.params.userTc
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update_a_user_from_tc = function(req, res) {
    user.findOneAndUpdate({ 'tc': req.params.userTc }, req.body, { new: true }, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete_a_user_from_tc = function(req, res) {
    user.remove({
        'tc': req.params.userTc
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'user successfully deleted' });
    });
};

// vehicle controllers:

exports.list_all_vehicles = function(req, res) {
    vehicle.find({}, function(err, vehicle) {
        if (err)
            res.send(err);
        res.json(vehicle);
    });
};

exports.create_a_vehicle = function(req, res) {
    var new_vehicle = new vehicle(req.body);
    new_vehicle.save(function(err, vehicle) {
        if (err)
            res.send(err);
        res.json(vehicle);
    });
};

// job controllers:

exports.list_all_jobs = function(req, res) {
    job.find({}, function(err, job) {
        if (err)
            res.send(err);
        res.json(job);
    });
};

exports.create_a_job = function(req, res) {
    var new_job = new job(req.body);
    new_job.save(function(err, job) {
        if (err)
            res.send(err);
        res.json(job);
    });
};