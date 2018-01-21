const QixInfo = require('./../src');
const log = console.log;

(async () => {
  let qixInfo = new QixInfo();
  let apps = await qixInfo.listApps();
  log();
  log(`Amount of apps: ${apps.length}`);
  apps.forEach(app => {
    log(`  - ${app.qDocName}`);
  });
  log();
})();
