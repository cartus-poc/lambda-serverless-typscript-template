import { APIGatewayProxyHandler } from 'aws-lambda';

export const post: APIGatewayProxyHandler = async (event, _context) => {
    console.log('Hello'); //Hot reload
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }),
    };
}
