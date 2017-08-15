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

exports.read_a_vehicle = function(req, res) {
    vehicle.findById(req.params.vehicleId, function(err, vehicle) {
        if (err)
            res.send(err);
        res.json(vehicle);
    });
};

exports.update_a_vehicle = function(req, res) {
    vehicle.findOneAndUpdate({ _id: req.params.vehicleId },
        req.body, { new: true },
        function(err, vehicle) {
            if (err)
                res.send(err);
            res.json(vehicle);
        });
};

exports.delete_a_vehicle = function(req, res) {
    vehicle.remove({
        _id: req.params.vehicleId
    }, function(err, vehicle) {
        if (err)
            res.send(err);
        res.json({ message: 'vehicle successfully deleted' });
    });
};

exports.read_a_vehicle_from_vin = function(req, res) {
    vehicle.findOne({
        'vin': req.params.vehicleVin
    }, function(err, vehicle) {
        if (err)
            res.send(err);
        res.json(vehicle);
    });
};

exports.update_a_vehicle_from_vin = function(req, res) {
    vehicle.findOneAndUpdate({ 'vin': req.params.vehicleVin },
        req.body, { new: true },
        function(err, vehicle) {
            if (err)
                res.send(err);
            res.json(vehicle);
        });
};

exports.delete_a_vehicle_from_vin = function(req, res) {
    vehicle.remove({
        'tc': req.params.vehicleVin
    }, function(err, vehicle) {
        if (err)
            res.send(err);
        res.json({ message: 'vehicle successfully deleted' });
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

exports.read_a_job = function(req, res) {
    job.findById(req.params.jobId, function(err, job) {
        if (err)
            res.send(err);
        res.json(job);
    });
};

exports.update_a_job = function(req, res) {
    job.findOneAndUpdate({ _id: req.params.jobId },
        req.body, { new: true },
        function(err, job) {
            if (err)
                res.send(err);
            res.json(job);
        });
};

exports.delete_a_job = function(req, res) {
    job.remove({
        _id: req.params.jobId
    }, function(err, job) {
        if (err)
            res.send(err);
        res.json({ message: 'job successfully deleted' });
    });
};

// usage controllers

exports.list_all_usages = function(req, res) {
    usage.find({}, function(err, usage) {
        if (err)
            res.send(err);
        res.json(usage);
    });
};

exports.create_a_usage = function(req, res) {
    var new_usage = new usage(req.body);
    new_usage.save(function(err, job) {
        if (err)
            res.send(err);
        res.json(usage);
    });
};

exports.read_a_usage = function(req, res) {
    usage.findById(req.params.usageId, function(err, usage) {
        if (err)
            res.send(err);
        res.json(usage);
    });
};

exports.update_a_usage = function(req, res) {
    usage.findOneAndUpdate({ _id: req.params.usageId },
        req.body, { new: true },
        function(err, usage) {
            if (err)
                res.send(err);
            res.json(usage);
        });
};

exports.delete_a_usage = function(req, res) {
    usage.remove({
        _id: req.params.usageId
    }, function(err, usage) {
        if (err)
            res.send(err);
        res.json({ message: 'usage successfully deleted' });
    });
};