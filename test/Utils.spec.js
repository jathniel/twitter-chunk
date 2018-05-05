let chai = require('chai');
import  Utils from '../app/Utils';
let should = chai.should();

describe('Tweet Utils', () => {
  it('should chunk a tweet', (done) => {
    const data = Utils.splitMessage("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.")
    data.should.be.an('array');
    data[0].should.be.equal('1/2 I can\'t believe Tweeter now supports chunking my');
    data[1].should.be.equal('2/2 messages, so I don\'t have to do it myself.');
    done();

  });
});
