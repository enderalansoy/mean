var express = require('express'),
    app = express(),
    port = process.env.PORT || 8001,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

var uri = 'mongodb://aendersoy:iop890778@ds139985.mlab.com:39985/meanmongo';

mongoose.Promise = global.Promise;
mongoose.connect(uri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

process.on('uncaughtException', function(err) {
    console.log(err);
});

// use /public as index folder:
app.use(express.static('public'));

console.log('Mean backend RESTful API server started on: ' + port);