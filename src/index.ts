import { DummyServer } from './dummy_server';

new DummyServer().listen()
    .then(() => {
        // ok
    })
    .catch((err: Error) => {
        console.error(err);
    });
