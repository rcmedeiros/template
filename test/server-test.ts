import { it, describe } from "mocha"
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)

describe('server', () => {
    it('should display list when root', (done) => {
        chai.request('http://localhost:8080')
            .get('/')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('array')
                    .which.contains('Green Tea')
                    .which.contains('Himalaya Darjeeling')
                    .which.contains('Earl Grey tea')
                    .which.does.not.contains('Brockley breakfast tea');
                done(err);
            });
    });

    it('should treat 404', (done) => {
        chai.request('http://localhost:8080')
            .get('/milk')
            .end((err, res) => {
                expect(res.status).to.be.equal(404);
                done(err);
            });
    });
});