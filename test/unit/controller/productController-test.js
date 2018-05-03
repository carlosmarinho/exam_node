const expect = require('chai').expect
const sinon = require('sinon');
const productController = require('../../../controller/Product');
const product = require('../../../models/Product')


describe('Teste do controller product', () => {
    let sandbox = null;

    beforeEach(()=>{
        sandbox = sinon.sandbox.create();
    })

    afterEach(()=>{
        sandbox.restore();
    })

    describe('Product:: Metodo View', () => {
        const req = {
            params: {
                id: 1
            },
            body: {

            },
            headers:{

            }
        }

        it('Deve retornar um json com o produto buscado', (done) => {
            let res = {
                
                status: function(code) {
                    return{
                        json: (ret) => {
                            expect(code).to.be.equal(200);
                            expect(ret).to.be.an('array');
                            done();
                        }
                    }
                }
            }
            
            let ret = [
                {"id":1,"name":"TESTE A","date":"2018-04-27T12:43:58.000Z","price":30,"photo":null},
             ]

            sandbox.stub(product, 'getProductById').callsFake(function(id, cb){
                cb(null, ret);
            })

            productController.view(req, res, sinon.spy())
        })

        it('Deve retornar um erro ao buscar o produto', (done) => {
            
            let msgErro = "Erro ao buscar o produto";
            
            let res = {
                status: function(code) {
                    return{
                        json: (ret) => {
                            expect(code).to.be.equal(500);
                            expect(ret.message).to.be.equal(msgErro);
                            done();
                        }
                    }
                }
            }

            sandbox.stub(product, 'getProductById').callsFake(function(id, cb){
                cb(new Error(msgErro), null);
            })

            productController.view(req, res, sinon.spy())
        })
    })

    describe('Product:: Metodo ViewAll', () => {
        const req = {
            body: {

            },
            headers:{

            }
        }

        it('Deve retornar um json com todos os produtos', (done) => {
            let res = {
                
                status: function(code) {
                    return{
                        json: (ret) => {
                            expect(code).to.be.equal(200);
                            expect(ret).to.be.an('array');
                            done();
                        }
                    }
                }
            }
            
            let ret = [
                {"id":1,"name":"TESTE A","date":"2018-04-27T12:43:58.000Z","price":30,"photo":null},
                {"id":2,"name":"TESTE B","date":"2018-04-27T12:43:58.000Z","price":40,"photo":null}
             ]

            sandbox.stub(product, 'getAllProducts').callsFake(function(params, cb){
                cb(null, ret);
            })

            productController.viewAll(req, res, sinon.spy())
        })

        it('Deve retornar um erro ao buscar todos os produtos', (done) => {
            
            let msgErro = "Erro ao buscar os produtos";
            
            let res = {
                status: function(code) {
                    return{
                        json: (ret) => {
                            expect(code).to.be.equal(500);
                            expect(ret.message).to.be.equal(msgErro);
                            done();
                        }
                    }
                }
            }

            sandbox.stub(product, 'getAllProducts').callsFake(function(params, cb){
                cb(new Error(msgErro), null);
            })

            productController.viewAll(req, res, sinon.spy())
        })
    })
})
