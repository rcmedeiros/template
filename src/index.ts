import { DummyServer } from './dummy_server';

let s: DummyServer = new DummyServer();
s.listen()

    .then((server: DummyServer) => {
        s = server;
    })
    .catch((err: Error) => {
        console.error(err);
    });

export = s;
