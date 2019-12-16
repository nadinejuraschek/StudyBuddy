/*************************************
MODULES, PACKAGES
*************************************/
// CORE MODULES
const fs = require('fs');
const path = require('path');

// NPM PACKAGES
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// listens either on PORT set by deployment or local PORT 3000
const PORT = process.env.PORT || 3000;

// parse application
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/assets'));

// CUSTOM MODULES
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, function() {
    console.log("Server has started on PORT " + PORT + ".");
});