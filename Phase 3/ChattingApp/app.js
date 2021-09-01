const express = require('express')
const app = express()

//routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

//Listen on port 3000
server = app.listen(3000)



//socket.io instantiation
const io = require("socket.io")(server)


//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')

	//default username
	socket.username = "Anonymous"


    //listen on new_message
    socket.on('new_message', (data) => {
        console.log('New Message: '+data.message)
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })


})

console.log('Server is listing at port 3000')
