import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';

export class CdkContextSampleStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps, buildConfig: BuildConfig) {
    super(scope, id, props);

    new nodejs.NodejsFunction(this, 'TestFunction', {
      functionName: 'test-function',
      timeout: Duration.seconds(buildConfig.Parameters.lambda.timeout),
    });
  }
}
