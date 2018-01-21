const QixInfo = require('./../lib/index');
const chalk = require('chalk');
const log = console.log;

function buildConfig(cfg) {
  return {
    host: cfg.host,
    port: cfg.port
  }
}

module.exports = {
  listApps: async (config) => {
    let cfg = buildConfig(config);
    let qixInfo = new QixInfo(cfg);
    let apps = null;
    try {
      apps = await qixInfo.listApps();
    }
    catch (e) {
      log();
      log(chalk`{red Could not retrieve apps.}`);
      if (!config.verbose) {
        log(chalk`{Use option --verbose to see details.`);
      }
      if (config.verbose) {
        console.error(e);
      }
      log();
      return;
    }
    console.log();
    console.log(`Apps returned from the QIX engine: ${apps.length || 0}`);
    console.log(chalk`{gray Host: ${qixInfo.config.host}:${qixInfo.config.port}}`);
    console.log();
    apps.forEach(app => {
      console.log(`  - ${app.qDocName}`);
    });
    console.log();
    console.log();
  }
};
