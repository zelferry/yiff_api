const miniget = require('miniget');

const pkg = require('../package.json');
const UPDATE_INTERVAL = 1000 * 60 * 60 * 12;
exports.lastUpdateCheck = 0;
exports.checkForUpdates = () => {
  if (!process.env.YTDL_NO_UPDATE && !pkg.version.startsWith('2.0.1-') &&
    Date.now() - exports.lastUpdateCheck >= UPDATE_INTERVAL) {
    exports.lastUpdateCheck = Date.now();
    return miniget('https://raw.githubusercontent.com/zelferry/yiff_api/master/package.json', {
      headers: { 'User-Agent': 'yiff-core' },
    }).text().then(response => {
      if (JSON.parse(response).version !== `v${pkg.version}`) {
        console.warn('\x1b[33mWARNING:\x1B[0m yiff_api is out of date! Update with "npm install yiff_api@latest".');
      }
    }, err => {
      console.warn('Error checking for updates:', err.message);
      console.warn('You can disable this check by setting the `NO_UPDATE` env variable.');
    });
  }
  return null;
};