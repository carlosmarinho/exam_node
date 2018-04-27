const user = require('../models/User')
class UserController {
    constructor() {

    }

    login (req, res, next) {
        var login = req.body.login;
        var password = req.body.password;
        console.log(req);
        if(user.login(login, password)){
            res.status(200).json({status:true, message: 'Usuário logado com sucesso'})
        }
        else{
            res.status(200).json({status:false, message: 'Login ou senha inválida, por favor tente novamente!'})
        }
    }

    remove(req, res, next) {
        user.deleteUser(req.params.id, function (err, count) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(count);
            }

        });
    }

    add(req, res, next) {
        let prod = {
            name: req.body.name,
            price: req.body.price,
            photo: req.body.photo
        };

        user.addUser(prod, function (err, count) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(req.body);//or return count for 1 &amp;amp;amp; 0
            }
        });
    }

    view(req, res, next) {
        if (!req.params.id) {
            res.status(400).json({ "erro": "Bad Request" });
        }

        user.getUserById(req.params.id, function (err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(rows);
            }
        });
    }

    viewAll(req, res, next) {

        user.getAllUsers(function (err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(rows);
            }
        });
    }
}

module.exports = new UserController();