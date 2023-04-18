const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lets-get-to-networking');


module.exports = mongoose.connection;
