let log = require('./log.js');
// send any object to log function
const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter First Name: ", function(fname) {
    rl.question("Enter Last Name: ", function(lname) {
        rl.question("Enter Email: ", function(email) {
            rl.question("Enter Gender: ", function(gender) {


                let data = {
                    "firstname": fname,
                    "secondname": lname,
                    "email": email,
                    "Gender" : gender,
                    "created_at": new Date().toUTCString()
                };

                log(data);

                rl.close();

            });
        });
    });
});
