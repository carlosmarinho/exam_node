var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'c2rlos',
    database: 'exam'
});

module.exports = connection;