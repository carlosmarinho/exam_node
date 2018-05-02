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
        console.log("sql: ", sql);

        ret =  db.query(sql, callback);
        console.log('ret', ret);
        return ret;
    },
    getUserById: function (id, callback) {
        return db.query("select * from user where Id=?", [id], callback);
    },
    addUser: function (user, callback) {
        return db.query("Insert into user (`username`, `firstname`, `lastname`, `email`) values (?,?,?,?)", [user.name, user.price, user.photo], callback);
    },
    deleteUser: function (id, callback) {
        return db.query("delete from user where Id=?", [id], callback);
    },
    updateUser: function (id, user, callback) {
        return db.query("update user set username=?, firstname=?, lastname=? where Id=?", [user.username, user.firstname, user.lastname, id], callback);
    }

};
module.exports = User;