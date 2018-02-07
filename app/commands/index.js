const rp = require('request-promise');
const url = 'https://cyrex.southeastasia.cloudapp.azure.com';

module.exports = {
  botOnline: function () {
    return rp(url +  '/api/online');
  },
  botStats: function () {
    return rp(url + '/api/leaderboard');
  },
  botScore: function (id) {
    return rp(url + '/api/time/' + id);
  }
}
