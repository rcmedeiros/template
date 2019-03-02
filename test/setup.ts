import { before, after, describe } from "mocha"
import s from '../src/index';

describe('server', () => {
    before(async (done) => {
        s.listen().then(() => {
            done();
        })
    });

    after(async () => {
        await s.close();
    });
});