var express = require('express'),
    app = express(),
    port = process.env.PORT || 8001,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

process.on('uncaughtException', function(err) {
    console.log(err);
});

app.use(express.static('public'));
console.log('todo list RESTful API server started on: ' + port);