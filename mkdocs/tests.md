# Tests

Tests are a complex if not polemic topic. TDD or not TDD, not every automated test is an unit test, not every unit test needs to be automated. But frameworks have to be deployed to guarantee regression tests, which is how you know that the feature of fix being introduced now won't break anything that was working perfectly before.

## Mocha

This project uses [Mocha](https://mochajs.org/) for that, only because it's the one I learned first and always used in the past. I sincerely can't say anything about the others but I'll sure give [Jest](https://jestjs.io/) a try. It has [increased its popularity](https://www.npmtrends.com/mocha-vs-jest-vs-jasmine-vs-karma) this year and I ought to know why.

### TS-Node

Mocha is a JavaScript testing framework, and the code to test is written in TypeScript. To make this work, we use ts-node, a TypeScript execution and REPL for node.js. In short, it transpiles the code on-the-fly, no need to build-ts or watch-ts. All you have to do is to add `--require ts-node/register` as a command line parameter.

*[REPL]: read–eval–print loop

### Chai

To make the tests clearer and semantically pleasant, we use Chai. it's an assertion library and has the sole function of turning this:

```Typescript
assert.equal(res.status, 200);
```

into this:

```Typescript
res.status.should.be.equal(200);
// or...
 expect(res.status).to.be.equal(200);
```

It may look foolish, but after a couple hundred tests, code that looks like description helps a lot.