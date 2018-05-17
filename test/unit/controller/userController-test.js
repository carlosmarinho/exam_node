const expect = require('chai').expect;
const sinon = require('sinon');
const userController = require('../../../controller/Users')
const user = require('../../../models/User')


describe("User Controller Test", () => {
    let sandbox = null;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    })

    afterEach(() => {
        sandbox.restore();
    })

    describe("Login action", () => {
        const req = {
            body:{}
        };

        it("Usuário deve fazer login", (done)=>{

            let res = {
                status: (code) => {
                    return{
                        json: (ret) => {
                            expect(code).to.be.equal(200);
                            done();
                        }
                    }
                }
            }

            sandbox.stub(user, 'login').returns(true);
            userController.login(req, res, sinon.spy());

        });

        it("Usuário não deve conseguir fazer login", (done)=>{

            let res = {
                status: (code) => {
                    return{
                        json: (ret) => {
                            expect(code).to.be.equal(401);
                            done();
                        }
                    }
                }
            }

            sandbox.stub(user, 'login').returns(false);
            userController.login(req, res, sinon.spy());

        })
    })
})