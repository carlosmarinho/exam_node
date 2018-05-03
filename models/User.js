var db = require('../dbconnection'); //reference of dbconnection.js

var User = {

    login: function (login, password) {
        if(login === 'admin' && password === '12345678')
            return true;
        
        return false;
    },
    getAllUsers: function (params, callback) {
        let where = "";
        let order = "";
        if(params.sort)
        {
            let sort = params.sort.split(',')
            let asc = sort[1].replace("]","").replace('"','').replace('"','');
            sort = sort[0].replace("[", "").replace('"','').replace('"','');
            
            order = " order by " + sort + " " + asc
        }

        if(params.filter && params.filter !== "{}")
        {
                let filter = params.filter.split(':')
                filter = filter[1].replace("}","").replace('"','').replace('"','');
                /*@todo colocar a query parametrizada com ?*/
                where = " where `username` like '" + filter + "%' ";
        }
        
        let sql = "Select * from user" + where + order;

        ret =  db.query(sql, callback);
        return ret;
    },
    getUserById: function (id, callback) {
        return db.query("select * from user where Id=?", [id], callback);
    },
    addUser: function (user, callback) {
        return db.query("Insert into user (`username`, `first_name`, `last_name`, `email`) values (?,?,?,?)", [user.username, user.first_name, user.last_name, user.email], callback);
    },
    deleteUser: function (id, callback) {
        return db.query("delete from user where Id=?", [id], callback);
    },
    updateUser: function (id, user, callback) {
        console.log("\n\nNo update user: ", user);
        ret = db.query("update user set username=?, first_name=?, last_name=?, email=? where Id=?", [user.username, user.first_name, user.last_name, user.email, id], callback);
        console.log("no updateuser: ", ret);
        console.log("\n\nUsuario:::: ", user);
        return ret;
    }

};
module.exports = User;