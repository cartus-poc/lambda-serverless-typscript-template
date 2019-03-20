import assert from 'assert'
import sinon from 'sinon'

describe('someFunction', function () {
    let sandbox = sinon.createSandbox()
    let consoleStub = <sinon.SinonStub>{}
    beforeEach(() => {
        consoleStub = sandbox.stub(console, 'error')
    })
    it('should do this', function () {
        assert(true)
    })
    it('should do that', function () {
        assert(true)
    })
    it('should log the error', function () {
        //Run smoething
        //assert that console.error was called with 'error' and 'error text'
        //console.error('error', 'error text')
        assert(consoleStub.calledWith('error', 'error text'))
    })
})