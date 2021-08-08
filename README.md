# cdk-workshop-with-localstack

[THE TYPESCRIPT WORKSHOP](https://cdkworkshop.com/20-typescript.html)

# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Preparation

aws cli install -> [AWS Command Line Interface Documentation](https://docs.aws.amazon.com/cli/index.html)

localstack config
```bash
aws configure --profile=localstack

AWS Access Key ID [None]: dummy
AWS Secret Access Key [None]: dummy
Default region name [None]: us-east-1
Default output format [None]: json
```

## Deploy
```bash
npm run local:bootstrap

npm run local:deploy
```

## Local end point

Get API Gateway REST_API_ID for localstack
```bash
npm run local:apigateway
```

## Access

http://localhost:4566/restapis/${REST_API_ID}/prod/_user_request_/
