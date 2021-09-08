// import mongose
const mongoose = require("mongoose");
const call_data_json = require("./call_data.json");

// console.log(call_data_json); return;

// connect config
mongoose.connect('mongodb://localhost:27017/call-analysis',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: true,
        w: "majority",
    }
);

// connect to mongo db
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");

    // define Schema
    var callSchema = mongoose.Schema({
        _id: Number,
        source: String,
        destination: String,
        sourceLocation: String,
        destinationLocation: String,
        callDuration: String,
        roaming: String,
        callCharge: String
    }, { _id: false });

    // compile schema to model
    var data = mongoose.model('Data', callSchema, 'data');

    // save multiple documents to the collection referenced by Book Model
    data.collection.insertMany(call_data_json, function (err, docs) {
        if (err){
            return console.error(err);
        } else {
            console.log("Call Analysis Data Imported Successfully.");
        }
    });

});
