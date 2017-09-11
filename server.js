var express = require('express'),
    app = express(),
    port = process.env.PORT || 8002,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');
    
app.use(require('forest-express-mongoose').init({
    modelsDir: __dirname + '/api/models', // Your models directory.
    envSecret: '59f08a6ba57a7d2d673ee5fefc483a5ef9075438da9283b73ce63a27bc991a75',
    authSecret: 'wgKmHurjiIrOeAcahuwJCuhxnJh23vKe',
    mongoose: require('mongoose') // The mongoose database connection.
}));

var uri = 'mongodb://aendersoy:iop890778@ds139985.mlab.com:39985/meanmongo';

mongoose.Promise = global.Promise;
mongoose.connect(uri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

// use /public as index folder:
app.use(express.static('public'));

console.log('Mean backend RESTful API server started on: ' + port);