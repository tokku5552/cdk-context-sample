import { Construct } from 'constructs';
import * as _ from 'lodash';

const ensureString = (object: { [name: string]: string }, propName: string): string => {
  if (!object[propName] || object[propName].trim().length === 0)
    throw new Error(propName + ' does not exist or is empty');

  return object[propName];
};

export const getConfig = (app: Construct): BuildConfig => {
  const stage = app.node.tryGetContext('config');
  if (!stage)
    throw new Error('Context variable missing on CDK command. Pass in as `-c config=XXX`');

  const defaultEnv = app.node.tryGetContext('default');
  const stageEnv = app.node.tryGetContext(stage);

  const unparsedEnv = _.merge(defaultEnv, stageEnv);

  const buildConfig: BuildConfig = {
    AWSAccountID: ensureString(unparsedEnv, 'AWSAccountID'),
    AWSProfileName: ensureString(unparsedEnv, 'AWSProfileName'),
    AWSProfileRegion: ensureString(unparsedEnv, 'AWSProfileRegion'),

    App: ensureString(unparsedEnv, 'App'),
    Version: ensureString(unparsedEnv, 'Version'),
    Environment: ensureString(unparsedEnv, 'Environment'),
    Build: ensureString(unparsedEnv, 'Build'),

    Parameters: {
      lambda: {
        timeout: +ensureString(unparsedEnv['Parameters']['lambda'], 'timeout'),
      },
    },
  };

  return buildConfig;
};
