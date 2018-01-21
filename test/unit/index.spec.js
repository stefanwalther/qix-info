const QixInfo = require('./../../lib/');

describe('QixInfo (Unit)', () => {

  describe('Config', () => {
    it('should return a default config', () => {
      let qixInfo = new QixInfo();
      expect(qixInfo.config).to.exist;
      expect(qixInfo.config).to.have.a.property('host').to.be.equal('localhost');
      expect(qixInfo.config).to.have.a.property('port').to.be.equal(9076);
    });

    it('allows to pass in custom config params', () => {
      let qixInfo = new QixInfo({host: 'myhost', port: 9999});
      expect(qixInfo.config).to.have.a.property('host').to.be.equal('myhost');
      expect(qixInfo.config).to.have.a.property('port').to.be.equal(9999);
    });

    it('should have a proper url, based on the config params', () => {
      let qixInfo = new QixInfo({host: 'myhost', port: 9999});
      expect(qixInfo.url).to.be.equal('ws://myhost:9999');
    })
  });
});
