var express = require("express"),
    app = express(),
    port = process.env.PORT || 2424,
    mongoose = require('mongoose');
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
var Task = require('C:/Users/inbanadmin/Desktop/nodePractice/api/models/nodePracticeModel')();
var bodyParser = require('body-parser');
var morgan = require("morgan");
var jwt = require("jsonwebtoken");
var config = require("C:/Users/inbanadmin/Desktop/nodePractice/config");
var user = require("C:/Users/inbanadmin/Desktop/nodePractice/api/models/users")();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/chartsDb');
app.set("superSecret", config.secret);


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));



var routes = require('C:/Users/inbanadmin/Desktop/nodePractice/api/routes/nodePracticeRoute');
routes(app);
app.get('/setup', function (req, res) {

    // create a sample user
    var nick = new User({
        name: 'Admin',
        password: 'Admin',
        admin: true
    });

    // save the sample user
    nick.save(function (err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({
            success: true
        });
    });
});

app.listen(port);
console.log("nodePractice api started on: " + port);
