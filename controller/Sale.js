class SaleController {
    constructor() {
        /* this.jsonVendaProduto = [
            {"nome":"A", "valor":"60.000", "data":"01/01/2018"},
            {"nome":"B", "valor":"40.000", "data":"01/01/2018"},
            {"nome":"C", "valor":"22.000", "data":"01/01/2018"},
            {"nome":"D", "valor":"35.000", "data":"01/01/2018"},
            {"nome":"E", "valor":"50.000", "data":"01/01/2018"}
        ]; */
/* 
        this.jsonVendaProduto = [
            ["A", "60.000", "01/01/2018"],
            ["B", "40.000", "01/01/2018"],
            ["C", "22.000", "01/01/2018"],
            ["D", "35.000", "01/01/2018"],
            ["E", "50.000", "01/01/2018"]
        ] */

        this.jsonVendaProduto = [
            ["A", "60.000", ],
            ["B", "40.000" ],
            ["C", "22.000" ],
            ["D", "35.000" ],
            ["E", "50.000" ]
        ]

        this.jsonVendaEstado = [
            { "name": "AM", "data":{ "A":  "15.000" }},
            { "name": "AM", "data":{ "B":  "7.000" }},
            { "name": "AM", "data":{ "C":  "7.000" }},
            { "name": "AM", "data":{ "D":  "5.000" }},
            { "name": "AM", "data":{ "E":  "7.000" }},
            { "name": "MG", "data":{ "A":  "8.000" }},
            { "name": "MG", "data":{ "B":  "5.000" }},
            { "name": "MG", "data":{ "C":  "8.000" }},
            { "name": "MG", "data":{ "D":  "7.000" }},
            { "name": "MG", "data":{ "E":  "8.000" }},
            { "name": "RJ", "data":{ "A":  "10.000" }},
            { "name": "RJ", "data":{ "B":  "8.000" }},
            { "name": "RJ", "data":{ "C": "5.000" }},
            { "name": "RJ", "data":{ "D":  "5.000" }},
            { "name": "RJ", "data":{ "E":  "7.000" }},
            { "name": "RS", "data":{ "A":  "5.000" }},
            { "name": "RS", "data":{ "B":  "5.000" }},
            { "name": "RS", "data":{ "C":  "7.000" }},
            { "name": "RS", "data":{ "D":  "5.000" }},
            { "name": "RS", "data":{ "E":  "10.000" }},
            { "name": "SP", "data":{ "A":  "8.000" }},
            { "name": "SP", "data":{ "B":  "15.000" }},
            { "name": "SP", "data":{ "C":  "5.000" }},
            { "name": "SP", "data":{ "D":  "7.000" }},
            { "name": "SP", "data":{ "E":  "7.000" }}
        ];

        this.jsonVendaCidade = [
            { "name": "Manaus", "data":{ "A": "15.000" }},
            { "name": "Manaus", "data":{ "B": "7.000" }},
            { "name": "Manaus", "data":{ "C": "7.000" }},
            { "name": "Manaus 1", "data":{ "D": "5.000" }},
            { "name": "Manaus 1", "data":{ "E": "7.000" }},
            { "name": "Belo Horizonte", "data":{ "A": "8.000" }},
            { "name": "Belo Horizonte", "data":{ "B": "5.000" }},
            { "name": "Belo Horizonte", "data":{ "C": "8.000" }},
            { "name": "Ouro Preto", "data":{ "D": "7.000" }},
            { "name": "Ouro Preto", "data":{ "E": "8.000" }},
            { "name": "Rio de Janeiro", "data":{ "A": "10.000" }},
            { "name": "Rio de Janeiro", "data":{ "B": "8.000" }},
            { "name": "Rio de Janeiro", "data":{ "C": "5.000" }},
            { "name": "Niterói", "data":{ "D": "5.000" }},
            { "name": "Niterói", "data":{ "E": "7.000" }},
            { "name": "Santa Catarina", "data":{ "A": "5.000" }},
            { "name": "Santa Catarina", "data":{ "B": "5.000" }},
            { "name": "Santa Catarina", "data":{ "C": "7.000" }},
            { "name": "Santa Catarina", "data":{ "D": "5.000" }},
            { "name": "Santa Catarina", "data":{ "E": "10.000" }},
            { "name": "São Paulo", "data":{ "A": "8.000" }},
            { "name": "São Paulo", "data":{ "B": "15.000" }},
            { "name": "São Paulo", "data":{ "C": "5.000" }},
            { "name": "Ubatuba", "data":{ "D": "7.000" }},
            { "name": "Ubatuba", "data":{ "E": "7.000" }}
        ];
    }

    vendaProduto(req, res, next) {
        res.status(200).json(this.jsonVendaProduto);
    }

    vendaEstado(req, res, next) {
        res.status(200).json(this.jsonVendaEstado);
    }

    vendaCidade(req, res, next) {
        res.status(200).json(this.jsonVendaCidade);
    }

}

module.exports = new SaleController();