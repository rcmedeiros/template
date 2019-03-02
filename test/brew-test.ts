import { it, describe } from "mocha"
import { expect } from 'chai';
import http, { IncomingMessage } from 'http';




describe('/', () => {
    it('should ask which', (done) => {
        http.get('http://localhost:8080/tea', (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk });
            res.on('end', () => {
                expect(data).to.be.equal('Which one?');
                done();
            });
        });
    });

    it('should serve', (done) => {
        http.get('http://localhost:8080/tea?t=Earl+Grey+tea', (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk });
            res.on('end', () => {
                expect(data).to.be.equal('{"tea":"Earl Grey tea"}');
                done();
            });
        });
    });


});