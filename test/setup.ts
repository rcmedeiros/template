import { before, after, describe } from "mocha"
import { DummyServer } from '../src/dummy_server';

let s: DummyServer = new DummyServer();
before((done) => {
    s.listen().then(() => {
        done();
    })
});

after((done) => {
    s.close()
        .then(() => {
            done();
        })
        .catch((err: Error) => {
            done(err);
        });
});
