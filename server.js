let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();

// Define the static folder
app.use(express.static(path.join(__dirname, 'src/')));

// Inform that server is alive
console.log("Server running on 8080.");
// Listen to a port
app.listen(8080);