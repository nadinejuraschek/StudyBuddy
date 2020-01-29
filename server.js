/*************************************
MODULES, PACKAGES
*************************************/
// CORE MODULES
const fs = require('fs');
const path = require('path');

// NPM PACKAGES
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json( ));
app.use(express.static(__dirname + '/assets'));

// CUSTOM MODULES
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(process.env.PORT, function() {
    console.log("Server has started on PORT " + process.env.PORT + ".");
});