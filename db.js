// db.js
var mongoose = require('mongoose');
let dbconfig = require("./secrets");

mongoose.connect(dbconfig.dbURL);