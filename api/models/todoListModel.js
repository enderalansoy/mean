'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Enter your name.',
  },
  surname: {
    type: String,
    required: 'Enter your surname.',
  },
  password: {
    type: String,
    required: 'Enter password'
  },
  tc: {
    type: Number,
    required: 'Enter your national identity number.',
    min: 10000000000,
    max: 99999999999,
    index: true,
    unique: true
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
  },
  is_approved: {
    type: [{
      type: Boolean,
      enum: [true, false]
    }],
    default: [false]
  },
});

module.exports = mongoose.model('Users', UserSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
  vin: {
    type: String,
    required: 'Enter the VIN number.',
    index: true,
    unique: true
  },
  license_plate: {
    type: String,
    required: 'Enter the license plate number.',
    index: true,
    unique: true
  },
  brand: {
    type: String,
    required: 'Enter the brand of the vehicle.'
  },
  model: {
    type: String,
    required: 'Enter the model of the vehicle.'
  },
  model_year: {
    type: Number,
    default: 2017
  },
  date_registered: {
    type: Date,
    default: Date.now
  },
  is_deleted:  {
    type: [{
      type: Boolean,
      enum: [true, false]
    }],
    default: [false]
  }
});

module.exports = mongoose.model('Vehicles', VehicleSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobsSchema = new Schema({
  barcode: {
    type: String,
    required: 'Enter barcode.'
  },
  description: {
    type: String,
    default: 'No description.'
  },
  phone_number: {
    type: Number,
    default: 0
  },
  latitude: {
    type: Number,
    required: 'Enter latitude.'
  },
  longitude: {
    type: Number,
    required: 'Enter longitude.'
  },
  number_of_boxes:  {
    type: Number,
    default: 1
  },
  weight: {
    type: Number,
    default: 1
  },
  width: {
    type: Number,
    default: 1
  },
  height: {
    type: Number,
    default: 1
  },
  depth: {
    type: Number,
    default: 1
  },
  is_deleted:  {
    type: [{
      type: Boolean,
      enum: [true, false]
    }],
    default: [false]
  },
  // foreign keys:
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: 'Enter a user_id for the job.'
  }
});

module.exports = mongoose.model('Jobs', JobsSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsageSchema = new Schema({
  jobs_completed: {
    type: Number,
    default: 0
  },
  jobs_notfound: {
    type: Number,
    default: 0
  },
  jobs_notcompleted:  {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  km_estimated: {
    type: Number,
    default: 0
  },
  km_passed: {
    type: Number,
    default: 0
  },
  time_estimated: {
    type: Number,
    default: 0
  },
  time_passed: {
    type: Number,
    default: 0
  },
  lunch_break_time: {
    type: Number,
    default: 0
  },
  planned_stoppage_time: {
    type: Number,
    default: 0
  },
  random_stoppage_time: {
    type: Number,
    default: 0
  },
  geofence_time_passed: {
    type: Number,
    default: 0
  },
  geofence_number: {
    type: Number,
    default: 0
  },
  fuel_consumption: {
    type: Number,
    default: 0
  },
  // foreign keys:
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: 'Enter a user_id for the job.'
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'Vehicles',
    required: 'Enter a vehicle_id for the job.'
  }
});

module.exports = mongoose.model('Usages', UsageSchema);