interface LambdaParameters {
  readonly timeout: number;
}
interface BuildParameters {
  readonly lambda: LambdaParameters;
}

interface BuildConfig {
  readonly AWSAccountID: string;
  readonly AWSProfileName: string;
  readonly AWSProfileRegion: string;

  readonly App: string;
  readonly Environment: string;
  readonly Version: string;
  readonly Build: string;

  readonly Parameters: BuildParameters;
}
