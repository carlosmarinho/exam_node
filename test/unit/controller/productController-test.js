const expect = require('chai').expect
const sinon = require('sinon');
productController = require('../../../controller/Product');

describe('Teste do controller product', () => {
    let sandbox = null;

    beforeEach(()=>{
        sandbox = sinon.sandbox.create();
    })

    afterEach(()=>{
        sandbox.restore();
    })

    describe('Product:: Metodo View', () => {
        it('Deve retornar um json com todos os produtos', (done) => {

        })
    })
})
