# Pipeline

For this template, I built the pipeline with CircleCI. I already work with GitLab CI/CD and Travis is quite popular so I chose to try this. It pleased me very much the way I can write parameterized jobs and reuse them in different workflows, the different kinds of persistence, and for the clarity of the final Yaml. It's quite a platform.

There are three workflows:

* **development_commit**: Commits to branch develop;
* **staging_commit**: Commits to release or master branches;
* **release**: Commits of release tags.

![](assets/diagram.png)

Now open the [configuration](https://github.com/rcmedeiros/template/blob/master/.circleci/config.yml) in another window for the text bellow to make sense.

## stamp

Every workflow stars with a stamp. Package.json version tag contains a *"-dev"* string that'll get replaced by the unique number of the spawned build, put there for tracking purposes.
It'll also print the NPM Token to then *.npmrc* file, for unattended authentication.

## dependencies and dev_dependencies

Development and production dependencies are cached separately and indexed by a checksum of package.json. It means it'll download and install them only once per package.json revision, when the checksum changes. That's why I wrote a script that calls `npm install` only when *node_modules* don't already exist. And to keep package.json from changing and messing with the checksum function, I had to use the `--no-save` flag

## docs

MkDocs documentation are freely and easily deployed to [ReadTheDocs](http://readthedocs.org) through webhooks, and that should be a default approach. However, if your project isn't open source and you need the documentation deployed as a website, I wrote this job to generate the final HTML and push it back to the repository as an automated push. In this case, the folder is being watched and published by GitHub, but it might as well be an `htdocs` or `wwwroot` folder in a server elsewhere where files should go through SCP, or an AWS S3 hosted website pushed through AWS CLI. Unattended authentication will be implemented with SSH Keys.

Open a term like Git Bash and run '`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`'. The e-mail is important, the password should **NOT** be set. You know you did it right if the private key starts with "`-----BEGIN RSA PRIVATE KEY-----`"

Private key is kept with CircleCI, public key goes to the remote server. 

To set up the public key:

* In GitHub, it's the path to the repository plus `/settings/keys` at the end;
* in GitLab, it's `/settings/repository`;
* In Bitbucket, it's `/admin/access-keys/`;
* In a linux server, just add the public key as a new line to `~/.ssh/authorized_keys`.

To set up the private key in CircleCI repository (not dashboard, repository!), add `/edit#ssh` to the URL and click Add SSH Key. Hostname must match. E.g.: `github.com`. Copy the fingerprint.

Now in the config.yml, see the fingerprint just before the *Push new version* command? That's what makes it.

Don't forget to shred the files. They are meant to be use in these steps but not saved.

The script `.circleci/push_docs_site.sh` is there to guarantee that only new versions of the site are going to be pushed. That's because sitemap.xml.gz is always generated regardless whether or not there were modifications, so it'll be left out of the decision.

## audit_dependencies

It's not enough to make sure your code is tight, the code of the dependencies you use must be verified too. NPM audit is quite enough, but just to be safe I also check with [Snyk](https://snyk.io/), which [connects to other vulnerability databases, such as CVEs from NVD and many others](https://snyk.io/docs/security/)

## code_review

If you are just starting to code, maybe you have a personal all yours way of organizing your thoughts that almost serves as a signature. It's no much of a problem if you're the only one who maintains it, but even in a small team people need to feel conformable giving maintenance to the code of others. That's why we need a conventional code style. The more consistent you code is, the cleaner will be your commits, and the faster other people will be able to understand it.

[TSLint](https://palantir.github.io/tslint/) is the default linter for TypeScript, and it's main objective is to enforce the code style. The most popular set of rules are [tslint-config-airbnb](https://www.npmjs.com/package/tslint-config-airbnb), [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules) and [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier). Choose one of them, or make yourself another based on one of them. Just do it.
 
This job is saving the result as a report in JUnit format because if it fails, you can see the occurrences in CircleCI UI.

## build

 Build is build, no further explanation required. Only this job has a different set of options for production code and development code.

<!-- A branch is deemed a release branches if it's a valid [SemVer](https://semver.org/) tag preceded with *"release/v"*. Release tags are the same, except there will be no *release/* preceding it. When a tag is committed that maches an existing release branch, 

master is also a release branch, but it's  -->
