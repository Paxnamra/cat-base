import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);

describe("catController", () => {
    describe("GET /", () => {
        it("should get status 200 and message that server is running on port 4000", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.text).to.equal(`Server is running on 4000`);
                    done();
                });
        });
    });
});