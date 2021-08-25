const fs = require("fs");

// Storing the JSON format data in myObject
let data = fs.readFileSync("log.json");
let myObject = JSON.parse(data);

module.exports = function (newData) {
    myObject.push(newData);
 
// Writing to our JSON file
    let newData2 = JSON.stringify(myObject);
    fs.writeFile("log.json", newData2, (err) => {
        // Error checking
        if (err) throw err;
        console.log("data logged.");
    });

};
