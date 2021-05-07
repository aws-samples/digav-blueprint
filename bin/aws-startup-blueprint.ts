#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsStartupBlueprintStack } from '../lib/aws-startup-blueprint-stack';

const app = new cdk.App();
new AwsStartupBlueprintStack(app, 'AwsDiGavBlueprint', {
    description: "AWS DiGAV Blueprint CDK is an AWS Quick Start that helps companies deploy core AWS Infrastructure with restrictions designed to help them comply with the Digitale Gesundheitsanwendungen-Verordnung (also referred to as DiGAV) standards. (qs-fltrw0ng4) (ib-fltrw0ng4)"
});
