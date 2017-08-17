'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/todoListController');

    // user routes:
    app.route('/users')
        .get(todoList.list_all_users)
        .post(todoList.create_a_user);

    app.route('/users/notapproved')
        .get(todoList.list_unapproved_users);
    
    app.route('/users/approved')
        .get(todoList.list_approved_users);

    app.route('/users/id/:userId')
        .get(todoList.read_a_user)
        .put(todoList.update_a_user)
        .delete(todoList.delete_a_user);

    app.route('/users/tc/:userTc')
        .get(todoList.read_a_user_from_tc)
        .put(todoList.update_a_user_from_tc)
        .delete(todoList.delete_a_user_from_tc);

    // vehicle routes:
    app.route('/vehicles')
        .get(todoList.list_all_vehicles)
        .post(todoList.create_a_vehicle);

    app.route('/vehicles/id/:vehicleId')
        .get(todoList.read_a_vehicle)
        .put(todoList.update_a_vehicle)
        .delete(todoList.delete_a_vehicle);

    app.route('/vehicles/vin/:vehicleVin')
        .get(todoList.read_a_vehicle_from_vin)
        .put(todoList.update_a_vehicle_from_vin)
        .delete(todoList.delete_a_vehicle_from_vin);

    // job routes:
    app.route('/jobs')
        .get(todoList.list_all_jobs)
        .post(todoList.create_a_job);

    app.route('/jobs/id/:jobId')
        .get(todoList.read_a_job)
        .put(todoList.update_a_job)
        .delete(todoList.delete_a_job);

    // usage routes:
    app.route('/usages')
        .get(todoList.list_all_usages)
        .post(todoList.create_a_usage);

    app.route('/usages/id/:usageId')
        .get(todoList.read_a_usage)
        .put(todoList.update_a_usage)
        .delete(todoList.delete_a_usage);
};