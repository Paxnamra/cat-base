import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);

describe("catController", () => {
    describe("GET /", () => {
        it("should get message that server is running", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('object');
                    done();
                });
        });
    });
});