import { it, describe } from "mocha"
import { expect } from 'chai';
import http, { IncomingMessage } from 'http';




describe('/', () => {
    it('should return 200', (done) => {
        console.debug('NODE_ENV' + process.env.NODE_ENV);
        http.get('http://localhost:8080', (res: IncomingMessage) => {
            expect(res.statusCode).to.be.equal(200)
            done();
        });
    });

    it('should say "Hello, world!"', (done) => {
        http.get('http://localhost:8080', (res) => {
            var data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                expect(JSON.parse(data)).to.be.an('array').that.contains('Earl Grey tea');
                done();
            });
        });
    });
});