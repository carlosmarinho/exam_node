var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'carlos',
    database: 'exam'
});

module.exports = connection;