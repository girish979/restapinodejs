let dbconfig = require("./secrets");

var remoteURL = 'mongodb+srv://demouser:demouser@cluster0-pv048.mongodb.net/test?retryWrites=true';
var localURL = 'mongodb://127.0.0.1/test?retryWrites=true';
var dbURL = localURL

module.exports = {dbURL: dbURL}