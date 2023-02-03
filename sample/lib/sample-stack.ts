import { Duration, Stack, StackProps, CfnOutput,} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class SampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create a lambda function with API Gateway trigger
    const fn = new lambda.Function(this, 'SampleFunction', {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.lambda_handler',
      timeout: Duration.seconds(30),
    });

    // create an API Gateway REST API
    const api = new apigw.RestApi(this, 'SampleApi', {
      restApiName: 'Sample API',
      description: 'This is a sample API',
    });

    // add a GET method to the API
    const getIntegration = new apigw.LambdaIntegration(fn);
    api.root.addMethod('GET', getIntegration);
    
    // add a POST method to the API
    const postIntegration = new apigw.LambdaIntegration(fn);
    api.root.addMethod('POST', postIntegration);

    // export API endpoint with cfnoutput
    new CfnOutput(this, 'APIEndpoint', {
      value: api.url,
    }).overrideLogicalId('APIEndpoint');
  }
}
