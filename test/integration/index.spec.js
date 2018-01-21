const QixInfo = require('./../../lib/');

describe('QixInfo (Integration)', () => {

  it('should throw an error if the wrong host is passed', async () => {
      let qixInfo = new QixInfo({host: 'localhost', port: 9999});
      qixInfo._createSession();
      await expect(qixInfo.session.open()).to.be.rejected;
  });

  it('should return the list of apps', async () => {
    let qixInfo = new QixInfo();
    let docs = await qixInfo.listApps();
    expect(docs).to.be.an('array').of.length.greaterThan(0);
  });

});
