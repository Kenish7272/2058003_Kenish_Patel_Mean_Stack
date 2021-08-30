const express = require('express')
const path = require('path')
const fs = require("fs");
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 8110

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
})

app.get('/api', function (req, res) {
	let data = require('./data.json');
	res.send(data);
})

app.get('/create', function (req, res) {
	res.sendFile(__dirname + "/views/add.html");
})

app.post('/store', function (req, res) {
	let data = fs.readFileSync("data.json");
	let myObject = JSON.parse(data);

	myObject.push(req.body);

// Writing to our JSON file
	let newData2 = JSON.stringify(myObject);
	fs.writeFile("data.json", newData2, (err) => {
		// Error checking
		if (err) throw err;
		console.log("data logged.");
	});

	res.redirect('/');
})

app.get('/delete/:taskId', function (req, res) {
	let data = require('./data.json');

	for (let prop in data){
		if (data[prop].taskId == req.params.taskId){
			delete data[prop];
		}
	}

	data = data.filter(function(x) { return x !== null });
	data = JSON.stringify(data);
	fs.writeFile("data.json", data, (err) => {
		// Error checking
		if (err) throw err;
		console.log("data added.");
	});

	res.redirect('/');
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
