import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as Sample from '../lib/sample-stack';

test('SQS Queue and SNS Topic Created', () => {
  const app = new cdk.App();
  const stack = new Sample.SampleStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  // check if lambda function is created
  template.hasResourceProperties('AWS::Lambda::Function', {
    Runtime: 'python3.8',
    Timeout: 30,
  });
  // check if API Gateway is created
  template.hasResourceProperties('AWS::ApiGateway::RestApi', {
    Name: 'Sample API',
    Description: 'This is a sample API',
  });
});
