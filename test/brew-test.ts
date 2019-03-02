import { it, describe } from "mocha"
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)


describe('/', () => {
    it('should ask which', (done) => {
        chai.request('http://localhost:8080')
            .get('/tea')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.text).to.be.equal('Which one?');
                done(err);
            });
    });

    it('should serve', (done) => {
        chai.request('http://localhost:8080')
            .get('/tea?t=Earl+Grey+tea')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.tea).to.be.equal('Earl Grey tea');
                done(err);
            });
    });
});