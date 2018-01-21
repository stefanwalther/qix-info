const WebSocket = require('ws');
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/12.20.0.json');
const extend = require('extend');

const baseConfig = {
  host: 'localhost',
  port: 9076
};


class QixInfo {
  constructor(config) {
    this.session = null;
    this.config = Object.assign(Object.assign({}, baseConfig), Object.assign({}, config));
    this.url = null;

    this._buildUrl();
  }

  _createSession() {
    this.session = enigma.create({
      schema,
      url: this.url,
      createSocket: url => new WebSocket(url),
    });
    return this.session;
  }

  async _closeSession() {
    if (this.session) {
      await this.session.close();
    }
  }

  async _getApps() {
    let global = await this.session.open();
    return await global.getDocList();
  }


  async listApps() {
    this._createSession();
    let docs = await this._getApps();
    await this._closeSession();
    return docs;
  }

  // ----------------------------------------------------------------------
  // Private helpers
  // ----------------------------------------------------------------------
  _buildUrl() {
    this.url = `ws://${this.config.host}:${this.config.port}`;
  }
}

module.exports = QixInfo;
