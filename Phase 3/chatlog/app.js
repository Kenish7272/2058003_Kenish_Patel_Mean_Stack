const express = require('express')
const mongoose = require("mongoose")

const app = express()

//routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

//Listen on port 3000
server = app.listen(3000)

// connect mongo db
mongoose.connect('mongodb://localhost:27017/chat',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: true,
        w: "majority",
    });

var chat
const db = mongoose.connection;
db.once("open", function () {
    console.log("Connected successfully");

    // define Schema
    var chatSchema = mongoose.Schema({
        name: String,
        message: String,
    });

    // compile schema to model
    chat = mongoose.model('Data', chatSchema, 'data');

});



//socket.io instantiation
const io = require("socket.io")(server)


//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')

	//default username
	socket.username = "Anonymous"


    //listen on new_message
    socket.on('new_message', (data) => {
        console.log(data)
        //broadcast the new message

        // insert in mongo db
        chat.collection.insertOne({message : data.message, username : data.username});

        io.sockets.emit('new_message', {message : data.message, username : data.username});
    })


})

console.log('Server is listing at port 3000')
