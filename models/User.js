var db = require('../dbconnection'); //reference of dbconnection.js

var User = {

    login: function (login, password) {
        if(login === 'admin' && password === '12345678')
            return true;
        
        return false;
    },
    getAllUsers: function (callback) {
        return db.query("Select * from user", callback);
    },
    getUserById: function (id, callback) {
        return db.query("select * from user where Id=?", [id], callback);
    },
    addUser: function (user, callback) {
        return db.query("Insert into user (`name`, `price`, `photo`) values (?,?,?)", [user.name, user.price, user.photo], callback);
    },
    deleteUser: function (id, callback) {
        return db.query("delete from user where Id=?", [id], callback);
    },
    updateUser: function (id, user, callback) {
        return db.query("update user set name=?, price=?, photo=? where Id=?", [user.name, user.price, user.photo, id], callback);
    }

};
module.exports = User;