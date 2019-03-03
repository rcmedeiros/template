import { it, describe } from "mocha"
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)


describe('brew', () => {
    it('should ask which', (done) => {
        chai.request('http://localhost:8080')
            .get('/tea')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.text).to.be.equal('Which one?');
                done(err);
            });
    });

    it('should serve GET', (done) => {
        chai.request('http://localhost:8080')
            .get('/tea?t=Earl+Grey+tea')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.tea).to.be.equal('Earl Grey tea');
                done(err);
            });
    });

    it('should serve POST', (done) => {
        chai.request('http://localhost:8080')
            .post('/tea')
            .type('form')
            .send({ t: 'Himalaya Darjeeling' })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.tea).to.be.equal('Himalaya Darjeeling');
                done(err);
            });
    });

    it('should not serve unknown', (done) => {
        chai.request('http://localhost:8080')
            .post('/tea')
            .type('form')
            .send({ t: 'Peppermint leaf tea' })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.text).to.be.equal('Peppermint leaf tea unavailable. Try another.');
                done(err);
            });
    });

    it('should not brew coffee', (done) => {
        chai.request('http://localhost:8080')
            .get('/coffee')
            .end((err, res) => {
                expect(res.status).to.be.equal(418);
                done(err);
            });
    });
});