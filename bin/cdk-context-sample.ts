#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkContextSampleStack } from '../lib/cdk-context-sample-stack';
import { getConfig } from '../lib/util/getConfig';

const app = new cdk.App();

const buildConfig = getConfig(app);

new CdkContextSampleStack(app, 'CdkContextSampleStack', {}, buildConfig);
