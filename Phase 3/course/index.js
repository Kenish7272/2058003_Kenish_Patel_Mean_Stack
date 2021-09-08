const express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
    console.log('listening on localhost:3000')
})

mongoose.connect('mongodb://localhost:27017/courses',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: true,
        w: "majority",
    });

var course
const db = mongoose.connection;
db.once("open", function () {
    console.log("Connected successfully");

    // define Schema
    var courseSchema = mongoose.Schema({
        _id: Number,
        name: String,
        description: String,
        amount: Number,
    }, {_id: false});

    // compile schema to model
    course = mongoose.model('Data', courseSchema, 'data');

});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/all', function (req, res) {

    course.find().then(doc => {
        res.send(doc)
    })
        .catch(err => {
            console.error(err)
        });

})

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/create.html')
})

app.post('/store', (req, res) => {

    course.collection.insertOne(req.body);

    res.redirect('/');

})

app.get('/delete/:_id', function (req, res) {

    course.findOneAndDelete(req.params._id.toString() , req.body, function(err, data) {
        if (!err) {
            console.log(data)
            console.log('success')
        }
        else {
            console.log(err)
        }
    });

    res.redirect('/')
})

