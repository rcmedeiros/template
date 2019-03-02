import { DummyServer } from './dummy_server';

new DummyServer().listen()
    .then((server: DummyServer) => {
        // ok
    })
    .catch((err: Error) => {
        console.error(err);
    });
