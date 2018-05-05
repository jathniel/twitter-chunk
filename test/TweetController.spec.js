let chai = require('chai');
let chaiHttp = require('chai-http');
import app from '../server';
let should = chai.should();

chai.use(chaiHttp);
var agent = chai.request.agent(app);
describe('TweetController', () => {
  it('should post a tweet on /api/tweet', (done) => {
    agent
      .post('/api/tweet')
      .send({
        title: "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself."
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should list all tweet on /api/tweet/', (done) => {
    agent
      .get('/api/tweet/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');
        done();
      });
  });
  it('should render the index page', (done) => {
    agent
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
