class SaleController {
    constructor() {
        this.jsonVendaProduto = [
            {"nome":"A", "valor":"60.000", "data":"01/01/2018"},
            {"nome":"B", "valor":"40.000", "data":"01/01/2018"},
            {"nome":"C", "valor":"22.000", "data":"01/01/2018"},
            {"nome":"D", "valor":"35.000", "data":"01/01/2018"},
            {"nome":"E", "valor":"50.000", "data":"01/01/2018"}
        ];

        this.jsonVendaEstado = [
            {"estado":"AM", "produto":"A", "valor":"15.000"},
            {"estado":"AM", "produto":"B", "valor":"7.000"},
            {"estado":"AM", "produto":"C", "valor":"7.000"},
            {"estado":"AM", "produto":"D", "valor":"5.000"},
            {"estado":"AM", "produto":"E", "valor":"7.000"},
            {"estado":"MG", "produto":"A", "valor":"8.000"},
            {"estado":"MG", "produto":"B", "valor":"5.000"},
            {"estado":"MG", "produto":"C", "valor":"8.000"},
            {"estado":"MG", "produto":"D", "valor":"7.000"},
            {"estado":"MG", "produto":"E", "valor":"8.000"},
            {"estado":"RJ", "produto":"A", "valor":"10.000"},
            {"estado":"RJ", "produto":"B", "valor":"8.000"},
            {"estado":"RJ", "produto":"C", "valor":"5.000"},
            {"estado":"RJ", "produto":"D", "valor":"5.000"},
            {"estado":"RJ", "produto":"E", "valor":"7.000"},
            {"estado":"RS", "produto":"A", "valor":"5.000"},
            {"estado":"RS", "produto":"B", "valor":"5.000"},
            {"estado":"RS", "produto":"C", "valor":"7.000"},
            {"estado":"RS", "produto":"D", "valor":"5.000"},
            {"estado":"RS", "produto":"E", "valor":"10.000"},
            {"estado":"SP", "produto":"A", "valor":"8.000"},
            {"estado":"SP", "produto":"B", "valor":"15.000"},
            {"estado":"SP", "produto":"C", "valor":"5.000"},
            {"estado":"SP", "produto":"D", "valor":"7.000"},
            {"estado":"SP", "produto":"E", "valor":"7.000"}
        ];

        this.jsonVendaCidade = [
            {"cidade":"Manaus", "produto":"A", "valor":"15.000"},
            {"cidade":"Manaus", "produto":"B", "valor":"7.000"},
            {"cidade":"Manaus", "produto":"C", "valor":"7.000"},
            {"cidade":"Manaus 1", "produto":"D", "valor":"5.000"},
            {"cidade":"Manaus 1", "produto":"E", "valor":"7.000"},
            {"cidade":"Belo Horizonte", "produto":"A", "valor":"8.000"},
            {"cidade":"Belo Horizonte", "produto":"B", "valor":"5.000"},
            {"cidade":"Belo Horizonte", "produto":"C", "valor":"8.000"},
            {"cidade":"Ouro Preto", "produto":"D", "valor":"7.000"},
            {"cidade":"Ouro Preto", "produto":"E", "valor":"8.000"},
            {"cidade":"Rio de Janeiro", "produto":"A", "valor":"10.000"},
            {"cidade":"Rio de Janeiro", "produto":"B", "valor":"8.000"},
            {"cidade":"Rio de Janeiro", "produto":"C", "valor":"5.000"},
            {"cidade":"Niterói", "produto":"D", "valor":"5.000"},
            {"cidade":"Niterói", "produto":"E", "valor":"7.000"},
            {"cidade":"Santa Catarina", "produto":"A", "valor":"5.000"},
            {"cidade":"Santa Catarina", "produto":"B", "valor":"5.000"},
            {"cidade":"Santa Catarina", "produto":"C", "valor":"7.000"},
            {"cidade":"Santa Catarina", "produto":"D", "valor":"5.000"},
            {"cidade":"Santa Catarina", "produto":"E", "valor":"10.000"},
            {"cidade":"São Paulo", "produto":"A", "valor":"8.000"},
            {"cidade":"São Paulo", "produto":"B", "valor":"15.000"},
            {"cidade":"São Paulo", "produto":"C", "valor":"5.000"},
            {"cidade":"Ubatuba", "produto":"D", "valor":"7.000"},
            {"cidade":"Ubatuba", "produto":"E", "valor":"7.000"}
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

module.exports = new ProductController();