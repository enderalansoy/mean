'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todoListController');

    app.route('/users')
        .get(todoList.list_all_users)
        .post(todoList.create_a_user);

    app.route('/users/id/:userId')
        .get(todoList.read_a_user)
        .put(todoList.update_a_user)
        .delete(todoList.delete_a_user);

    app.route('/users/tc/:userTc')
        .get(todoList.read_a_user_from_tc)
        .put(todoList.update_a_user_from_tc)
        .delete(todoList.delete_a_user_from_tc);

    app.route('/vehicles')
        .get(todoList.list_all_vehicles)
        .post(todoList.create_a_vehicle);

    app.route('/jobs')
        .get(todoList.list_all_jobs)
        .post(todoList.create_a_job);

    /* app.route('usage')
           .get(todoList.list_all_usages)
           .post(todoList.create_a_usage); */
};