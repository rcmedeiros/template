<!-- cSpell:ignore ational ulnerability atabase -->

# Vulnerability Scan

For 99,999% of cases, [npm audit](https://docs.npmjs.com/cli/audit) is more than enough. It's a result or the acquisition of [^Lift Security and Node Security Platform by NPM](https://blog.npmjs.org/post/172793182214/npm-acquires-lift-security-and-node-security), and has it's own database, more specific and relevant for JavaScript.

But maybe your project must be certifiable by an specific standard which enforces a strict set of databases which vulnerabilities are to be tested against. Odds are [NVD](https://nvd.nist.gov/) is included. It's the NIST *(National Institute of Standards and Technology)'s* **N**ational **V**ulnerability **D**atabase, sponsored by the National Cyber Security Division of the U.S. Department of Homeland Security. And if you need a tool which connects with NVD while maintaining its own database and is also [quite popular](https://www.npmtrends.com/auditjs-vs-npm-check-vs-retire-vs-snyk), you should try [Snyk](https://snyk.io/docs/security/).