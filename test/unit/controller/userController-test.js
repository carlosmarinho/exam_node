const expect = require('chai').expect;
const sinon = require('sinon');

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
            done();
        })
    })
})