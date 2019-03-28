import assert from 'assert'
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda'
import sinon from 'sinon'
import { post } from './handler'

describe('post', () => {
    let event = <APIGatewayProxyEvent>{}
    let context = <Context>{}
    const sandbox = sinon.createSandbox()
    let consoleLogStub = <sinon.SinonStub>{}
    beforeEach(() => {
        consoleLogStub = sandbox.stub(console, 'log')
    })
    afterEach(() => {
        sandbox.restore()
    })
    it('should return an response with 200 code', async () => {
        const actual = await post(event, context, x => x) as APIGatewayProxyResult
        assert.deepEqual(actual.statusCode, 200)
    })
    it('should return the event data and Message as the body of the response', async () => {
        event.body = 'hello world'
        const actual = await post(event, context, x => x) as APIGatewayProxyResult
        assert.deepEqual(actual.body, JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event
        }))
    })
    it('should log hello', async () => {
        await post(event, context, x => x) as APIGatewayProxyResult
        assert(consoleLogStub.calledWith('Hello'))
    })
})


