import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkWorkshopWithLocalstack from '../lib/cdk-workshop-with-localstack-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkWorkshopWithLocalstack.CdkWorkshopWithLocalstackStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(
        matchTemplate(
            {
                Resources: {},
            },
            MatchStyle.EXACT
        )
    );
});
