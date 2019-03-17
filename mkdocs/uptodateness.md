# Up-to-dateness

It's so tedious to keep all dependencies updated to their last version that I doubt most projects actually are, although it should be considered as important as any other audit. If you don't want to actively keep an eye on your [David badges](https://david-dm.org/) and manually edit your package.json for dependencies updates, a good solution is [Greenkeeper](https://greenkeeper.io/).

It knows your *package.json* and monitors the NPM feed. Whenever a new stable version of a dependency you project uses is released, it runs your CI tests against it, opens an issue if your CI tests fails, or opens a PR if the new version is [out of range for the SemVer](https://semver.npmjs.com/) you specified. The detailed explanation is [here](https://greenkeeper.io/docs.html#greenkeeper-step-by-step).
