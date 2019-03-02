import { it, describe } from "mocha"
import { expect } from 'chai';
import http, { IncomingMessage } from 'http';




describe('/', () => {
    it('should return 200', (done) => {
        http.get('http://localhost:8080', (res: IncomingMessage) => {
            expect(res.statusCode).to.be.equal(200)
            done();
        });
    });

    it('should display list', (done) => {
        http.get('http://localhost:8080', (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk });
            res.on('end', () => {
                expect(JSON.parse(data)).to.be.an('array')
                    .which.contains('Green Tea')
                    .which.contains('Himalaya Darjeeling')
                    .which.contains('Earl Grey tea')
                    .which.does.not.contains('Brockley breakfast tea');
                done();
            });
        });
    });
});