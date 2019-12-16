/*************************************
MODULES, PACKAGES
*************************************/
// CORE MODULES
const fs = require('fs');
const path = require('path');

// NPM PACKAGES
const express = require('express');
const app = express();

// CUSTOM MODULES
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.listen(8000, function() {
    console.log("Server has started on PORT 8000.");
});