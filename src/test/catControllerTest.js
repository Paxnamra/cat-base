import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe("catController", () => {
    describe("GET /", () => {
        it("should get message that server is running", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Server is running on 4000');
                    done();
                });
        });
    });
});