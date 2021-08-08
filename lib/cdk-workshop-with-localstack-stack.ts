import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import { HitCounter } from './hitcounter';

export class CdkWorkshopWithLocalstackStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Lambda
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_14_X, // execution environment
            code: lambda.Code.fromAsset('lambda'), // code loaded from "lambda" directory
            handler: 'hello.handler', // file is "hello", function is "handler",
            timeout: cdk.Duration.seconds(60), // for localstack
        });

        const helloWithCounter = new HitCounter(this, 'HelloHitCounter', {
            downstream: hello,
        });

        // API Gateway
        // defines an API Gateway REST API resource backed by our "hello" function.
        const endpoint = new apigateway.LambdaRestApi(this, 'Endpoint', {
            handler: helloWithCounter.handler,
        });
    }
}
