import * as cdk from 'aws-cdk-lib'
import  { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'
import path from 'path'


class BackendStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props)

        const statusLambda = new NodejsFunction(this, 'status-lambda', {
            runtime: lambda.Runtime.NODEJS_14_X,
              entry: path.join(__dirname, '../src/lambda/status.ts') 
      
        })

    }
}